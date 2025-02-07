import { Product } from "../domain/product";

export async function getProducts(): Promise<Product[]> {
  if (!process.env.API_URL || !process.env.API_KEY) {
    throw new Error("API_URL or API_KEY is not defined");
  }

  const response = await fetch(`${process.env.API_URL}/products`, {
    headers: { "x-api-key": process.env.API_KEY },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Error fetching products: ${response.status}`);
  }

  const data = await response.json();
  return data.map((item: any) => Product.create(item));
}