import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// ตั้งค่า NextAuth และสร้างระบบ Login ด้วย Google
export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    // ใช้ Google OAuth สำหรับเข้าสู่ระบบ
    Google({
      clientId:
        process.env.AUTH_GOOGLE_ID,

      clientSecret:
        process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    // ตรวจสอบสิทธิ์ก่อนเข้าแต่ละเส้นทาง
    authorized({ auth, request }) {
      // ดึง URL ที่ผู้ใช้กำลังเปิด
      const pathname =
        request.nextUrl.pathname;

      // ตรวจว่าเป็นหน้าแก้ไขหรือลบสินค้าหรือไม่
      const isProductManagementPage =
        /^\/products\/[^/]+\/(edit|delete)$/.test(
          pathname,
        );

      // ถ้าเป็นหน้าแก้ไขหรือลบ
      // ต้อง Login ก่อนจึงจะเข้าได้
      if (isProductManagementPage) {
        return Boolean(auth?.user);
      }

      // หน้าอื่น ๆ สามารถเข้าดูได้โดยไม่ต้อง Login
      return true;
    },
  },
});