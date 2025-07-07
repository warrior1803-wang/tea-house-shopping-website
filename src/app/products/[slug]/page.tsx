"use client";
import { getProductBySlug, products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import React from "react";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const product = getProductBySlug(slug);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }
  const alsoLike = products.filter((p) => p.slug !== product.slug);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
    setQuantity(1);
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F8E8] p-8 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
        {/* Product Image */}
        <div className="flex-1 flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={350}
            height={350}
            className="object-contain bg-white rounded-xl shadow-md"
          />
        </div>
        {/* Product Info */}
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl font-light text-[#384734] mb-2">{product.name}</h1>
          <div className="text-2xl text-[#384734] mb-4 font-semibold">€{product.price.toFixed(2)} EUR</div>
          <div className="mb-4 text-[#384734]">Taxes included.</div>
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#384734] font-medium">Quantity</span>
            <button
              className="border border-[#384734] text-[#384734] px-2 rounded disabled:opacity-50"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="text-[#384734]">{quantity}</span>
            <button
              className="border border-[#384734] text-[#384734] px-2 rounded"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
          <button
            className="bg-[#384734] text-white w-full py-2 mb-4 rounded hover:bg-[#2c3727] transition disabled:opacity-50"
            onClick={handleAddToCart}
            disabled={added}
          >
            {added ? "Added!" : "Add to cart"}
          </button>
          <div className="text-[#384734] mb-4">{product.description}</div>
          <div className="mb-2 font-semibold text-[#384734]">Ingredients and Allergies:</div>
          <div className="text-[#384734] mb-4 whitespace-pre-line">{product.ingredients}</div>
        </div>
      </div>
      {/* You may also like */}
      <div className="w-full max-w-6xl mt-16">
        <h2 className="text-2xl font-light mb-6 text-[#384734]">You may also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {alsoLike.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="bg-[#E6E9D8] rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
              <Image src={p.image} alt={p.name} width={120} height={120} className="object-contain mb-4" />
              <div className="text-lg text-[#384734] mb-1">{p.name}</div>
              <div className="text-[#384734]">€{p.price.toFixed(2)} EUR</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 