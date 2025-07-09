"use client";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { updateQuantity, removeFromCart, clearCart } from "@/store/cartSlice";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="w-full min-h-screen bg-[#F4F8E8] p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-light text-[#384734] mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-[#384734] text-lg">Your cart is empty.</div>
        ) : (
          <>
            <div className="flex flex-col gap-6 mb-8">
              {cartItems.map((item) => (
                <div key={item.product.slug} className="flex items-center bg-[#E6E9D8] rounded-xl p-4 gap-6">
                  <Image src={item.product.image} alt={item.product.name} width={80} height={80} className="object-contain rounded" />
                  <div className="flex-1">
                    <div className="text-xl text-[#384734] font-medium">{item.product.name}</div>
                    <div className="text-[#384734]">€{item.product.price.toFixed(2)} EUR</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="border border-[#384734] text-[#384734] px-2 rounded disabled:opacity-50"
                      onClick={() => dispatch(updateQuantity({ slug: item.product.slug, quantity: Math.max(1, item.quantity - 1) }))}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="text-[#384734]">{item.quantity}</span>
                    <button
                      className="border border-[#384734] text-[#384734] px-2 rounded"
                      onClick={() => dispatch(updateQuantity({ slug: item.product.slug, quantity: item.quantity + 1 }))}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="ml-4 p-2 text-red-600 hover:bg-red-100 rounded transition"
                    aria-label="Remove from cart"
                    onClick={() => dispatch(removeFromCart(item.product.slug))}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-8">
              <div className="text-2xl font-semibold text-[#384734]">Total:</div>
              <div className="text-2xl font-semibold text-[#384734]">€{total.toFixed(2)} EUR</div>
            </div>
            <button
              className="bg-[#384734] text-white w-full py-3 rounded text-xl font-semibold hover:bg-[#2c3727] transition mb-4"
              onClick={() => dispatch(clearCart())}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
} 