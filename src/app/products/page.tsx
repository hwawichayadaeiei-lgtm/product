import { auth } from "@/auth";
import ProductExplorer from "@/app/components/ProductExplorer";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const session = await auth();

  const products = getProducts();

  const isLoggedIn = Boolean(session?.user);

  return (
    <ProductExplorer
      initialProducts={products}
      isLoggedIn={isLoggedIn}
    />
  );
}