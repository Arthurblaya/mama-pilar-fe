import React from 'react';
import { Product } from '@/types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card shadow-md bg-base-100">
      <div className="card-body p-4">
        {product.images && product.images.length > 0 && (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover rounded-box mb-4"
          />
        )}
        <h2 className="card-title text-xl">{product.name}</h2>
        <p className="text-sm">Price: ${product.price}</p>
        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
