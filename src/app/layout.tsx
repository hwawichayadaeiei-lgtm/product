import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Project",
  description: "ระบบจัดการสินค้า",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
