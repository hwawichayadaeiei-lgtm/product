"use server";

// ใช้ auth เพื่อตรวจสอบว่าผู้ใช้ Login แล้วหรือยัง
import { auth } from "@/auth";

// ใช้ redirect เพื่อกลับไปหน้าหลักหลังทำงานเสร็จ
import { redirect } from "next/navigation";

import {
  deleteProduct,
  getProduct,
  markProductAsDeleted,
  saveUpdatedProduct,
} from "@/lib/products";

/* =========================
   ตรวจสอบสิทธิ์ผู้ใช้
========================= */

// ตรวจสอบ session ก่อนทำงานแก้ไขหรือลบสินค้า
async function requireUser() {
  const session = await auth();

  // ถ้ายังไม่ได้ Login ให้กลับไปหน้าหลัก
  if (!session?.user) {
    redirect("/");
  }

  return session.user;
}

/* =========================
   ลบสินค้า
========================= */

export async function deleteProductAction(
  id: string,
) {
  // ตรวจสอบว่าผู้ใช้ Login แล้ว
  await requireUser();

  // ตรวจสอบก่อนว่าสินค้าเป็นสินค้าที่เก็บในระบบ Local หรือไม่
  const localProduct = getProduct(id);

  if (localProduct) {
    // ถ้าเป็น Local ให้ลบออกจากรายการ
    deleteProduct(id);

    // ลบเสร็จแล้วกลับหน้าหลัก
    redirect("/");
  }

  // ถ้าไม่ใช่ Local ให้ส่ง DELETE ไปยัง DummyJSON
  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      method: "DELETE",
      cache: "no-store",
    },
  );

  // ตรวจสอบว่า API ลบสำเร็จหรือไม่
  if (!response.ok) {
    throw new Error(
      "ลบสินค้าไม่สำเร็จ",
    );
  }

  /*
    DummyJSON ใช้สำหรับการทดลอง API
    การลบจะไม่ได้หายถาวรจาก API

    จึงเก็บ ID ของสินค้าที่ถูกลบไว้
    เพื่อไม่ให้แสดงกลับมาในหน้าเว็บ
  */
  markProductAsDeleted(id);

  // ลบเสร็จแล้วกลับหน้าหลัก
  redirect("/");
}

/* =========================
   แก้ไขสินค้า
========================= */

export async function updateProductAction(
  id: string,
  formData: FormData,
) {
  // ตรวจสอบว่าผู้ใช้ Login แล้ว
  await requireUser();

  // รับชื่อสินค้าจาก Form
  const name = String(
    formData.get("name") ?? "",
  ).trim();

  // รับรายละเอียดสินค้า
  const description = String(
    formData.get("description") ?? "",
  ).trim();

  // รับราคาสินค้าและแปลงเป็นตัวเลข
  const price = Number(
    formData.get("price") ?? "",
  );

  /* =========================
     ตรวจสอบข้อมูล
  ========================= */

  if (!name) {
    throw new Error(
      "กรุณากรอกชื่อสินค้า",
    );
  }

  if (!description) {
    throw new Error(
      "กรุณากรอกรายละเอียด",
    );
  }

  // ตรวจสอบว่าราคาเป็นตัวเลขและไม่ติดลบ
  if (
    !Number.isFinite(price) ||
    price < 0
  ) {
    throw new Error(
      "ราคาไม่ถูกต้อง",
    );
  }

  /* =========================
     กรณีเป็นสินค้า Local
  ========================= */

  const localProduct = getProduct(id);

  if (localProduct) {
    // อัปเดตข้อมูลสินค้า Local
    localProduct.name = name;
    localProduct.title = name;
    localProduct.price = price;
    localProduct.description =
      description;

    // แก้ไขเสร็จแล้วกลับหน้าหลัก
    redirect("/");
  }

  /* =========================
     ดึงข้อมูลเดิมจาก DummyJSON
  ========================= */

  // ดึงข้อมูลเดิมเพื่อรักษา
  // รูปภาพ stock และ category เอาไว้
  const oldResponse = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!oldResponse.ok) {
    throw new Error(
      "ไม่พบสินค้านี้",
    );
  }

  const oldProduct =
    (await oldResponse.json()) as {
      id: number;
      title: string;
      price: number;
      stock: number;
      category: string;
      thumbnail: string;
      description: string;
      reviews?: {
        rating: number;
        comment: string;
        reviewerName: string;
      }[];
    };

  /* =========================
     ส่งข้อมูลแก้ไขไป DummyJSON
  ========================= */

  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      // ส่งเฉพาะข้อมูลที่ผู้ใช้แก้ไข
      body: JSON.stringify({
        title: name,
        price,
        description,
      }),

      cache: "no-store",
    },
  );

  // ตรวจสอบว่าแก้ไขสำเร็จหรือไม่
  if (!response.ok) {
    throw new Error(
      "แก้ไขสินค้าไม่สำเร็จ",
    );
  }

  /* =========================
     เก็บข้อมูลที่แก้ไข
  ========================= */

  // เก็บข้อมูลที่แก้แล้วไว้ในระบบ
  // และใช้ข้อมูลเดิมของรูปภาพ stock category
  saveUpdatedProduct({
    id: String(oldProduct.id),

    name,
    title: name,

    price,

    stock: oldProduct.stock,

    category:
      oldProduct.category,

    thumbnail:
      oldProduct.thumbnail,

    description,

    reviews:
      oldProduct.reviews ?? [],
  });

  // แก้ไขเสร็จแล้วกลับหน้าหลัก
  redirect("/");
}