export default function AboutUsSection() {
  return (
    <section id="about" className="w-full bg-[#F4F8E8] py-20 px-4">
      <div className="border-t border-[#E6E9D8] w-full mb-10" />
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Our Story */}
        <div className="flex flex-col  md:flex-row md:items-start gap-8 md:gap-0">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="text-[#8CA382] text-xl mb-2">About us</div>
            <h2 className="text-[#384734] text-5xl font-light">Our Story</h2>
          </div>
          <div className="md:w-1/2 text-[#384734] text-lg flex items-center">
            <p className="font-light">
              We started this shop with a simple idea:{" "}
              <b>
                to share the joy of authentic Japanese snacks and drinks with
                our community in Rotterdam.
              </b>{" "}
              We missed the unique flavours from our travels and late-night
              konbini runs, and we knew others did too.
              <br />
              Our mission is to bridge the distance, bringing a piece of
              Japan&apos;s vibrant culture directly to your doorstep.
            </p>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-[#E6E9D8] my-4" />
        {/* What We Believe In */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="text-[#8CA382] text-xl mb-2">About us</div>
            <h2 className="text-[#384734] text-5xl font-light">
              What We Believe In
            </h2>
          </div>
          <div className="md:w-1/2 text-[#384734] text-lg flex flex-col gap-2 justify-center">
            <p className="font-light">
              <b>Authentic Taste:</b> Every item is sourced directly from Japan.
            </p>
            <p className="font-light">
              <b>Curated Selection:</b> We only sell what we love and are
              excited to share.
            </p>
            <p className="font-light">
              <b>Simple Joy:</b> The best part of our day is bringing a little
              happiness to yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
