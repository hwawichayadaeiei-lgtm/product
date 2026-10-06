"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CATEGORIES,
  ProductDraftSchema,
  type Product,
  type ProductDraft,
} from "@/lib/products";

type ProductFormProps = {
  editing: Product | null;
  onSave: (draft: ProductDraft) => void;
  onCancel: () => void;
};

export default function ProductForm({
  editing,
  onSave,
  onCancel,
}: ProductFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProductDraft>({
    resolver: zodResolver(ProductDraftSchema),
    defaultValues: editing
      ? {
          title: editing.title,
          price: editing.price,
          stock: editing.stock,
          category: editing.category,
          thumbnail: editing.thumbnail,
          description: editing.description,
        }
      : {
          title: "",
          price: 0,
          stock: 0,
          category: CATEGORIES[0],
          thumbnail: "",
          description: "",
        },
  });

  function submitForm(data: ProductDraft) {
    onSave(data);

    reset({
      title: "",
      price: 0,
      stock: 0,
      category: CATEGORIES[0],
      thumbnail: "",
      description: "",
    });
  }

  return (
    <section className="product-form">
      <h2>{editing ? "แก้ไขสินค้า" : "เพิ่มสินค้าใหม่"}</h2>

      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="title">ชื่อสินค้า</label>
          <input
            id="title"
            {...register("title")}
          />
          {errors.title && (
            <p>{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="price">ราคา</label>
          <input
            id="price"
            type="number"
            {...register("price", {
              valueAsNumber: true,
            })}
          />
          {errors.price && (
            <p>{errors.price.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="category">หมวดหมู่</label>
          <select
            id="category"
            {...register("category")}
          >
            {CATEGORIES.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>

          {errors.category && (
            <p>{errors.category.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="stock">จำนวนสินค้า</label>
          <input
            id="stock"
            type="number"
            {...register("stock", {
              valueAsNumber: true,
            })}
          />

          {errors.stock && (
            <p>{errors.stock.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description">
            รายละเอียด
          </label>

          <textarea
            id="description"
            {...register("description")}
          />

          {errors.description && (
            <p>{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="thumbnail">
            URL รูปสินค้า
          </label>

          <input
            id="thumbnail"
            type="url"
            {...register("thumbnail")}
            placeholder="https://..."
          />

          {errors.thumbnail && (
            <p>{errors.thumbnail.message}</p>
          )}
        </div>

        <div className="form-actions">
          <button type="submit">
            {editing
              ? "บันทึกการแก้ไข"
              : "เพิ่มสินค้า"}
          </button>

          {editing && (
            <button
              type="button"
              onClick={onCancel}
            >
              ยกเลิก
            </button>
          )}
        </div>

        {!isDirty && editing && (
          <small>
            ยังไม่มีการเปลี่ยนแปลงข้อมูล
          </small>
        )}
      </form>
    </section>
  );
}