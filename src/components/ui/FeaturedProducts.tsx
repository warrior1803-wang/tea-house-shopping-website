import Image from "next/image";

const products = [
  {
    name: "Kirin Lemon Tea",
    image: "/40.png",
    price: 2.5,
    rating: 5.0,
    currency: "EUR",
  },
  {
    name: "Lemon Slice Ade",
    image: "/47.png",
    price: 2.4,
    rating: 5.0,
    currency: "EUR",
  },
  {
    name: "Kirin Namacha",
    image: "/35.png",
    price: 2.4,
    rating: 5.0,
    currency: "EUR",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="w-full bg-[#F4F8E8] py-16 px-4">
      <div className="border-t border-[#E6E9D8] w-full mb-10" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xl text-[#8CA382] mb-2">
            Our featured products
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-[#384734]">
            Your Daily Dose of Delight
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-[#E6E9D8] rounded-2xl border border-[#E6E9D8] flex flex-col items-start p-8"
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
                <div className="flex items-center text-[#8CA382] text-base font-medium">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#8CA382] mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-[#384734]">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
