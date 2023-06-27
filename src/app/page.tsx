import HeroSection from "@/sections/HeroSection";
import InspireSection from "@/sections/InspireSection";
import NavBar from "@/sections/NavBar";
import PickYourRideSection from "@/sections/PickYourRideSection";
import ShopByPrice from "@/sections/ShopByPrice";
import Slider from "@/sections/Slider";
import TheMostSearchBicks from "@/sections/TheMostSearchBicks";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mt-[4rem]">
        <HeroSection />
        <ShopByPrice />
        <InspireSection />
        <PickYourRideSection />
        <TheMostSearchBicks />
        <Slider />
      </main>
    </>
  );
}
