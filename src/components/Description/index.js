import Image from "next/image";

export default function Description() {
  return (
    <section className="bg-gray-100 py-10 w-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image 
            src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Premium Mobile Accessories" 
            width={800} 
            height={600} 
            className="rounded-lg object-cover w-full" 
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Enhance Your Mobile Experience</h2>
          <p className="text-gray-600 mt-4">
            Discover a range of high-quality mobile accessories, from sleek cases to
            powerful chargers. Elevate your device with stylish and functional gear
            designed to fit your lifestyle.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800">
            Shop Now !
          </button>
        </div>
      </div>
    </section>
  );
}
