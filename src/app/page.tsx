import UserHeader from "@/sections/header/userHeader/UserHeader";
import HeroSection from "@/sections/home/HeroSection";
import InspireSection from "@/sections/home/InspireSection";
import PickYourRideSection from "@/sections/home/PickYourRideSection";
import ShopByPrice from "@/sections/home/ShopByPrice";

export default function Home() {
  const test = "name";
  return (
    <>
      <UserHeader />
      <main>
        <HeroSection />
        <ShopByPrice />
        <InspireSection />
        <PickYourRideSection />
      </main>
    </>
  );
}
