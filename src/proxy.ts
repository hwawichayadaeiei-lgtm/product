// Next.js 16 ใช้ proxy แทน middleware เดิม
// ใช้ auth จากไฟล์ auth.ts เพื่อตรวจสอบว่าผู้ใช้ Login แล้วหรือยัง
export { auth as proxy } from "@/auth";

// กำหนดเส้นทางที่ต้องตรวจสอบสิทธิ์
// ถ้ายังไม่ได้ Login จะไม่สามารถเข้าแก้ไขหรือลบสินค้าได้
export const config = {
  matcher: [
    "/products/:id/edit",
    "/products/:id/delete",
  ],
};