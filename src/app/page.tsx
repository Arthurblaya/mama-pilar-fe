import { Product } from '@/types/Product';
import ProductCard from '@/components/ProductCard';

async function getProducts(): Promise<Product[]> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined");
  }

  const response = await fetch(`${process.env.API_URL}/products`, {
    headers: new Headers({
      'x-api-key': apiKey
    }),
    cache: "no-store"
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
