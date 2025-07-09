import Image from "next/image";

export default function IntroductionSection() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="border-t border-[#E6E9D8] w-full absolute left-0 top-0" />
      {/* Left: Heading + Image */}
      <div className="flex-1 bg-white flex flex-col justify-center items-center py-16 px-8">
        <h2 className="text-[#384734] text-5xl md:text-6xl font-light mb-10 text-left w-full max-w-xl">
          The Best of Japan,
          <br />
          Hand-picked for Rotterdam
        </h2>
        <div className="w-full flex justify-center">
          <Image
            src="/teacup.png"
            alt="Matcha Bowl"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
      {/* Right: Features */}
      <div className="flex-1 bg-[#F4F8E8] flex flex-col justify-center py-16 px-8">
        <div className="space-y-12 max-w-md mx-auto">
          {/* Feature 1 */}
          <div className="flex items-start space-x-6">
            <Image src="/autentic.png" alt="Authentic" width={48} height={48} />
            <div>
              <h3 className="text-[#384734] text-2xl font-semibold mb-2">
                Authentic Japanese Flavours
              </h3>
              <p className="text-[#384734] text-lg">
                We source our products directly from Japan, bringing you the
                authentic taste of beloved brands and rare regional finds that
                you can&apos;t get anywhere else in Rotterdam.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start space-x-6">
            <Image
              src="/select.png"
              alt="Curated Selection"
              width={48}
              height={48}
            />
            <div>
              <h3 className="text-[#384734] text-2xl font-semibold mb-2">
                A Curated Selection
              </h3>
              <p className="text-[#384734] text-lg">
                From iconic favourites to limited-edition treats, our collection
                is carefully hand-picked and constantly updated so you can
                always discover something new and exciting.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start space-x-6">
            <Image
              src="/truck-tick.png"
              alt="Fast Delivery"
              width={48}
              height={48}
            />
            <div>
              <h3 className="text-[#384734] text-2xl font-semibold mb-2">
                Fast Delivery in Rotterdam
              </h3>
              <p className="text-[#384734] text-lg">
                Enjoy your favourite Japanese snacks without the long wait.
                Place your order online and get fast, reliable delivery straight
                to your doorstep anywhere in Rotterdam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
