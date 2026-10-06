import { z } from "zod";

/* =========================
   Categories
========================= */

export const CATEGORIES = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
] as const;

/* =========================
   Sort fields
========================= */

export const SORT_FIELDS = [
  "title",
  "price",
  "stock",
] as const;

/* =========================
   Types
========================= */

export type Review = {
  rating: number;
  comment: string;
  reviewerName: string;
};

export type Product = {
  id: string;
  name: string;
  title: string;
  price: number;
  stock: number;
  category: string;
  thumbnail: string;
  description: string;
  reviews: Review[];
};

export type ProductDraft = {
  title: string;
  price: number;
  stock: number;
  category: string;
  thumbnail: string;
  description: string;
};

export type ProductList = {
  products: Product[];
  total: number;
};

export type SearchQuery = {
  q: string;
  limit: number;
  sortBy: (typeof SORT_FIELDS)[number];
};

/* =========================
   Zod schemas
========================= */

export const ProductDraftSchema = z.object({
  title: z
    .string()
    .min(1, "กรุณากรอกชื่อสินค้า"),

  price: z
    .number()
    .min(0, "ราคาต้องไม่ติดลบ"),

  stock: z
    .number()
    .min(0, "จำนวนสินค้าต้องไม่ติดลบ"),

  category: z
    .string()
    .min(1, "กรุณาเลือกหมวดหมู่"),

  thumbnail: z
    .string()
    .url("กรุณากรอก URL รูปภาพที่ถูกต้อง"),

  description: z
    .string()
    .min(1, "กรุณากรอกรายละเอียด"),
});

export const SearchQuerySchema = z.object({
  q: z.string(),

  limit: z
    .number()
    .min(1)
    .max(100),

  sortBy: z.enum(SORT_FIELDS),
});

export const defaultQuery: SearchQuery = {
  q: "",
  limit: 10,
  sortBy: "title",
};

/* =========================
   Local storage in memory
========================= */

declare global {
  var demoProducts:
    | Product[]
    | undefined;

  var deletedProductIds:
    | string[]
    | undefined;

  var updatedProducts:
    | Product[]
    | undefined;
}

const products =
  globalThis.demoProducts ?? [];

const deletedProductIds =
  globalThis.deletedProductIds ?? [];

const updatedProducts =
  globalThis.updatedProducts ?? [];

globalThis.demoProducts = products;

globalThis.deletedProductIds =
  deletedProductIds;

globalThis.updatedProducts =
  updatedProducts;

/* =========================
   Local product functions
========================= */

export function getProducts() {
  return products;
}

export function getProduct(id: string) {
  return products.find(
    (product) => product.id === id,
  );
}

export function addProduct(
  product: ProductDraft,
) {
  const newProduct: Product = {
    ...product,

    id: `p${Date.now()}`,

    name: product.title,

    reviews: [],
  };

  products.push(newProduct);

  return newProduct;
}

export function updateProduct(
  id: string,
  values: Pick<
    Product,
    "name" | "price" | "description"
  >,
) {
  const product = getProduct(id);

  if (!product) {
    throw new Error(
      "Product not found",
    );
  }

  product.name = values.name;

  product.title = values.name;

  product.price = values.price;

  product.description =
    values.description;
}

export function deleteProduct(
  id: string,
) {
  const index =
    products.findIndex(
      (product) =>
        product.id === id,
    );

  if (index === -1) {
    throw new Error(
      "Product not found",
    );
  }

  products.splice(index, 1);
}

/* =========================
   DummyJSON deleted products
========================= */

export function markProductAsDeleted(
  id: string,
) {
  if (
    !deletedProductIds.includes(id)
  ) {
    deletedProductIds.push(id);
  }
}

export function isProductDeleted(
  id: string,
) {
  return deletedProductIds.includes(id);
}

/* =========================
   DummyJSON updated products
========================= */

export function saveUpdatedProduct(
  product: Product,
) {
  const index =
    updatedProducts.findIndex(
      (item) =>
        item.id === product.id,
    );

  if (index === -1) {
    updatedProducts.push(product);
  } else {
    updatedProducts[index] = product;
  }
}

export function getUpdatedProduct(
  id: string,
) {
  return updatedProducts.find(
    (product) =>
      product.id === id,
  );
}

/* =========================
   DummyJSON types
========================= */

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

type DummyJsonResponse = {
  products: DummyJsonProduct[];
  total: number;
  skip: number;
  limit: number;
};

/* =========================
   Fetch products
========================= */

export async function fetchProducts(
  query: SearchQuery,
): Promise<ProductList> {
  const params =
    new URLSearchParams();

  params.set(
    "limit",
    String(query.limit),
  );

  params.set(
    "sortBy",
    query.sortBy,
  );

  params.set(
    "sortOrder",
    "asc",
  );

  let url =
    "https://dummyjson.com/products";

  const keyword =
    query.q.trim();

  if (keyword) {
    params.set(
      "q",
      keyword,
    );

    url =
      "https://dummyjson.com/products/search";
  }

  const response =
    await fetch(
      `${url}?${params.toString()}`,
      {
        cache: "no-store",
      },
    );

  if (!response.ok) {
    throw new Error(
      "เรียกข้อมูลสินค้าไม่สำเร็จ",
    );
  }

  const data =
    (await response.json()) as DummyJsonResponse;

  const apiProducts: Product[] =
    data.products
      .filter(
        (product) =>
          !isProductDeleted(
            String(product.id),
          ),
      )
      .map((product) => {
        const id =
          String(product.id);

        const updated =
          getUpdatedProduct(id);

        if (updated) {
          return updated;
        }

        return {
          id,

          name:
            product.title,

          title:
            product.title,

          price:
            product.price,

          stock:
            product.stock,

          category:
            product.category,

          thumbnail:
            product.thumbnail,

          description:
            product.description,

          reviews:
            product.reviews ?? [],
        };
      });

  return {
    products:
      apiProducts,

    total:
      data.total,
  };
}