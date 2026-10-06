import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import {
  getProduct,
  getUpdatedProduct,
} from "@/lib/products";
import { updateProductAction } from "@/app/actions";

type EditProductPageProps = {
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

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const session = await auth();

  // ต้อง Login ก่อนถึงจะแก้ไขได้
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
     4. ถ้าไม่มีสินค้าจริง ๆ
  ========================= */

  if (!product) {
    redirect("/");
  }

  /* =========================
     Server Action
  ========================= */

  const action =
    updateProductAction.bind(
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
      <h1>แก้ไขสินค้า</h1>

      <form
        action={action}
        style={{
          display: "grid",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <div>
          <label htmlFor="name">
            ชื่อสินค้า
          </label>

          <input
            id="name"
            name="name"
            type="text"
            defaultValue={
              product.title
            }
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "6px",
            }}
          />
        </div>

        <div>
          <label htmlFor="price">
            ราคา
          </label>

          <input
            id="price"
            name="price"
            type="number"
            defaultValue={
              product.price
            }
            min="0"
            step="any"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "6px",
            }}
          />
        </div>

        <div>
          <label htmlFor="description">
            รายละเอียด
          </label>

          <textarea
            id="description"
            name="description"
            defaultValue={
              product.description
            }
            rows={5}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "6px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "8px",
          }}
        >
          <button type="submit">
            บันทึก
          </button>

          <Link href="/">
            กลับหน้าหลัก
          </Link>
        </div>
      </form>
    </main>
  );
}