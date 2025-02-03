import { Product } from '@/types/Product';

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
  console.log(products);
  return (
    <div className="min-h-screen p-4">
    </div>
  );
}
