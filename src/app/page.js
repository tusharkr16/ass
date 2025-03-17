import Description from "@/components/Description";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/LatestProduct";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <FeaturedProducts/>
      <Description/>
    </div>
  );
}
