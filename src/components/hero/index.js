"use client"
import Image from "next/image";
import heroimg from "../../../public/4696945.svg"
import BlurText from "../BlurText";

const Hero = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
    return (
        <section className="relative w-full min-h-screen bg-white  flex justify-center md:items-center px-6 md:px-12">
            <div className=" w-full  mt-5  p-8 md:p-2 flex flex-col md:flex-row items-center">

                <div className="md:w-1/2 text-center md:text-left space-y-6">
                <BlurText
                        text="Upgrade Your Mobile Experience with Premium Accessories!"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Mellow, sans-serif' }}
                    />
                    <p className="text-gray-600 text-lg">
                        Discover the latest in mobile accessories – from sleek cases to fast chargers. Elevate your style and performance with top-quality products designed just for you!
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
                        Shop
                    </button>
                </div>


                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <Image
                        src={heroimg}
                        alt="Hero Image"
                        width={700}
                        height={700}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;