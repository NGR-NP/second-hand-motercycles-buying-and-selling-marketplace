import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import InspireSection from "@/sections/InspireSection";
import NavBar from "@/sections/NavBar";
import PickYourRideSection from "@/sections/PickYourRideSection";
import ShopByPrice from "@/sections/ShopByPrice";
import TheMostSearchBicks from "@/sections/TheMostSearchBicks";
import ElectricBike from "@/sections/home/ElectricBike";

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
        <ElectricBike />
      </main>
      <Footer />
    </>
  );
}
