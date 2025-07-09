"use client";

import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  description?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  rating = 4.5,
  description,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log("Adding to cart:", id);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={handleWishlist}
            className={`p-2 rounded-full transition-colors ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
            }`}
          >
            <Heart
              className="w-4 h-4"
              fill={isWishlisted ? "currentColor" : "none"}
            />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400"
                    : i < rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 text-sm ml-2">({rating})</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
            {price > 15 && (
              <span className="text-sm text-green-600 font-medium">
                Free Shipping
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
