"use server";

import { revalidatePath } from "next/cache";
import { Product } from "../domain/product";

export async function createProduct(formData: FormData) {
  const newProduct = {
    id: 0,
    name: formData.get("name"),
    categories: (formData.get("categories") as string)?.split(","),
    price: parseFloat(formData.get("price") as string),
    images: [(formData.get("image") as string) || ""],
    description: formData.get("description") as string
  };

  const product = Product.create(newProduct);

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    method: "POST",
    headers: { 
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY!, 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product),
  });

  revalidatePath("/products");
}
