"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  defaultQuery,
  fetchProducts,
  type Product,
  type ProductDraft,
  type ProductList,
  type SearchQuery,
} from "@/lib/products";

import ProductForm from "./ProductForm";
import ProductSearchForm from "./ProductSearchForm";

type LoadState =
  | "idle"
  | "loading"
  | "error"
  | "ready";

type ProductExplorerProps = {
  initialProducts: Product[];
  isLoggedIn: boolean;
};

export default function ProductExplorer({
  initialProducts,
  isLoggedIn,
}: ProductExplorerProps) {
  const [products, setProducts] =
    useState<Product[]>(initialProducts);

  const [status, setStatus] =
    useState<LoadState>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  function showResult(list: ProductList) {
    setProducts(list.products);
    setStatus("ready");
  }

  function showError(error: unknown) {
    setErrorMessage(
      error instanceof Error
        ? error.message
        : "ไม่สามารถโหลดสินค้าได้",
    );

    setStatus("error");
  }

  async function loadProducts(
    query: SearchQuery,
  ) {
    setStatus("loading");
    setErrorMessage("");

    try {
      const result =
        await fetchProducts(query);

      showResult(result);
    } catch (error) {
      showError(error);
    }
  }

  useEffect(() => {
    loadProducts(defaultQuery);
  }, []);

  function saveProduct(
    draft: ProductDraft,
  ) {
    if (editingProduct) {
      setProducts((currentProducts) =>
        currentProducts.map(
          (product) =>
            product.id === editingProduct.id
              ? {
                  ...product,
                  ...draft,
                  name: draft.title,
                  title: draft.title,
                }
              : product,
        ),
      );

      setEditingProduct(null);
    } else {
      const newProduct: Product = {
        ...draft,
        id: `p${Date.now()}`,
        name: draft.title,
        reviews: [],
      };

      setProducts((currentProducts) => [
        ...currentProducts,
        newProduct,
      ]);
    }

    setStatus("ready");
  }

  return (
    <section className="product-explorer">
      <div className="products-heading">
        <div>
          <p className="eyebrow">
            PRODUCT MANAGEMENT
          </p>

          <h1>สินค้าทั้งหมด</h1>

          <p className="heading-description">
            จัดการสินค้า ค้นหา และแก้ไขข้อมูลสินค้า
          </p>
        </div>
      </div>

      {/* แสดงส่วนเพิ่มสินค้าเฉพาะคนที่ Login แล้ว */}
      {isLoggedIn && (
        <div className="management-panel">
          <ProductForm
            key={
              editingProduct?.id ?? "new"
            }
            editing={editingProduct}
            onSave={saveProduct}
            onCancel={() =>
              setEditingProduct(null)
            }
          />

          <ProductSearchForm
            onSearch={loadProducts}
          />
        </div>
      )}

      {/* ถ้ายังไม่ Login ให้แสดงเฉพาะช่องค้นหา */}
      {!isLoggedIn && (
        <div className="management-panel">
          <ProductSearchForm
            onSearch={loadProducts}
          />
        </div>
      )}

      <section
        className="product-results"
        aria-live="polite"
      >
        {status === "loading" && (
          <div className="status-message">
            กำลังโหลดสินค้า...
          </div>
        )}

        {status === "error" && (
          <div
            className="status-message error"
            role="alert"
          >
            {errorMessage}
          </div>
        )}

        {status === "ready" &&
          products.length === 0 && (
            <div className="status-message">
              ไม่พบสินค้าที่ค้นหา
            </div>
          )}

        {status === "ready" &&
          products.length > 0 && (
            <div className="product-grid">
              {products.map((item) => {
                const reviews =
                  item.reviews ?? [];

                const averageRating =
                  reviews.length > 0
                    ? (
                        reviews.reduce(
                          (
                            total,
                            review,
                          ) =>
                            total +
                            review.rating,
                          0,
                        ) /
                        reviews.length
                      ).toFixed(1)
                    : null;

                return (
                  <article
                    className="product-card"
                    key={item.id}
                  >
                    <div className="product-image-wrapper">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="product-image"
                      />
                    </div>

                    <div className="product-card-content">
                      <span className="product-category">
                        {item.category}
                      </span>

                      <h2>{item.title}</h2>

                      <p className="product-description">
                        {item.description}
                      </p>

                      <div className="product-bottom">
                        <div className="price-stock">
                          <div>
                            <span>ราคา</span>

                            <strong>
                              ฿{item.price}
                            </strong>
                          </div>

                          <div>
                            <span>Stock</span>

                            <strong>
                              {item.stock}
                            </strong>
                          </div>
                        </div>

                        <div className="rating">
                          <span className="star">
                            ★
                          </span>

                          <strong>
                            {averageRating ?? "-"}
                          </strong>

                          <span>
                            ({reviews.length})
                          </span>
                        </div>

                        {/* แก้ไข / ลบ แสดงเฉพาะคนที่ Login */}
                        {isLoggedIn && (
                          <div className="product-actions">
                            <Link
                              href={`/products/${item.id}/edit`}
                            >
                              แก้ไข
                            </Link>

                            <Link
                              href={`/products/${item.id}/delete`}
                            >
                              ลบ
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
      </section>
    </section>
  );
}