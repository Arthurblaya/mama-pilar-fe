import { Product } from "../domain/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-32 rounded-md border p-2 text-xs shadow-sm">
      {product.images.length > 0 && (
        <img
          src={product.images[0]}
          alt={product.name}
          className="mx-auto h-24 w-24 rounded-sm"
        />
      )}
      <h2 className="mt-1 truncate text-center font-medium">{product.name}</h2>
      <p className="text-center text-gray-600">{product.getFormattedPrice()}</p>
    </div>
  );
}
