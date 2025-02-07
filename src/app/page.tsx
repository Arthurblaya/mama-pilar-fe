import ProductList from "../product/ui/ProductList";
import { getProducts } from '@/product/services/getProducts';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen p-4">
      <ProductList products={products} />
    </div>
  );
}