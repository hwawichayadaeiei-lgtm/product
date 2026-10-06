import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import {
  getProduct,
  getUpdatedProduct,
} from "@/lib/products";
import { deleteProductAction } from "@/app/actions";

type DeleteProductPageProps = {
  params: Promise<{ id: string }>;
};

type DummyJsonProduct = {
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

export default async function DeleteProductPage({
  params,
}: DeleteProductPageProps) {
  const session = await auth();

  // ต้อง Login ก่อนถึงจะลบสินค้าได้
  if (!session?.user) {
    redirect("/");
  }

  const { id } = await params;

  /* =========================
     1. ค้นหาสินค้า Local
  ========================= */

  let product = getProduct(id);

  /* =========================
     2. ถ้าเคยแก้ไขสินค้าแล้ว
        ใช้ข้อมูลที่แก้ล่าสุด
  ========================= */

  if (!product) {
    const updatedProduct =
      getUpdatedProduct(id);

    if (updatedProduct) {
      product = updatedProduct;
    }
  }

  /* =========================
     3. ถ้ายังไม่เจอ
        ดึงจาก DummyJSON โดยตรง
  ========================= */

  if (!product) {
    const response = await fetch(
      `https://dummyjson.com/products/${id}`,
      {
        cache: "no-store",
      },
    );

    if (response.ok) {
      const data =
        (await response.json()) as DummyJsonProduct;

      product = {
        id: String(data.id),
        name: data.title,
        title: data.title,
        price: data.price,
        stock: data.stock,
        category: data.category,
        thumbnail: data.thumbnail,
        description: data.description,
        reviews: data.reviews ?? [],
      };
    }
  }

  /* =========================
     4. ถ้าไม่พบสินค้า
  ========================= */

  if (!product) {
    redirect("/");
  }

  /* =========================
     Server Action
  ========================= */

  const action =
    deleteProductAction.bind(
      null,
      id,
    );

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1>ลบสินค้า</h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
        }}
      >
        คุณต้องการลบสินค้า{" "}
        <strong>
          {product.title}
        </strong>{" "}
        ใช่หรือไม่?
      </p>

      <div
        style={{
          marginTop: "12px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <p>
          ราคา:{" "}
          {product.price}
        </p>

        <p>
          หมวดหมู่:{" "}
          {product.category}
        </p>
      </div>

      <form
        action={action}
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "24px",
        }}
      >
        <button
          type="submit"
          style={{
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          ยืนยันการลบ
        </button>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "10px 18px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          ยกเลิก
        </Link>
      </form>
    </main>
  );
}