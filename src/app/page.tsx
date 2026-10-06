import { auth } from "@/auth";

import {
  fetchProducts,
  getProducts,
} from "@/lib/products";

import { AuthButtons } from "@/components/auth-buttons";

import ProductExplorer from "@/app/components/ProductExplorer";

export default async function HomePage() {
  // ตรวจสอบ session ว่าผู้ใช้ Login แล้วหรือยัง
  const session = await auth();

  /* =========================
     ดึงสินค้าจาก DummyJSON
  ========================= */

  // เรียก API เพื่อดึงรายการสินค้าจาก DummyJSON
  const result = await fetchProducts({
    q: "",
    limit: 100,
    sortBy: "title",
  });

  /* =========================
     ดึงสินค้าที่เพิ่มเอง
  ========================= */

  // ดึงสินค้าที่ผู้ใช้เพิ่มไว้ในระบบ Local
  const localProducts =
    getProducts();

  /* =========================
     รวมสินค้า
  ========================= */

  // รวมสินค้าจาก DummyJSON
  // และสินค้าที่เพิ่มเองเข้าด้วยกัน
  const products = [
    ...result.products,
    ...localProducts,
  ];

  // ตรวจสอบว่ามีผู้ใช้ Login อยู่หรือไม่
  const isLoggedIn =
    Boolean(session?.user);

  return (
    <main>
      <header>
        <h1>สินค้า</h1>

        {/* แสดงปุ่ม Login หรือ Logout
            พร้อมชื่อผู้ใช้เมื่อ Login แล้ว */}
        <AuthButtons
          isLoggedIn={isLoggedIn}
          userName={
            session?.user?.name
          }
        />
      </header>

      {/* ส่งข้อมูลสินค้าและสถานะ Login
          ไปแสดงผลใน ProductExplorer */}
      <ProductExplorer
        initialProducts={products}
        isLoggedIn={isLoggedIn}
      />
    </main>
  );
}