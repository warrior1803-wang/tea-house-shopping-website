import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <section className="w-full bg-[#F4F8E8] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[#384734] text-5xl md:text-6xl font-light mb-12 text-left">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="bg-[#E6E9D8] rounded-2xl border border-[#E6E9D8] flex flex-col items-start p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-full flex justify-center mb-8">
                <div className="p-6 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>
              <div className="w-full text-left">
                <div className="text-[#384734] text-xl font-medium mb-2">
                  {product.name}
                </div>
                <div className="text-[#384734] text-lg font-bold mb-2">
                  €{product.price.toFixed(2)} EUR
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 