import UserHeader from "@/sections/header/userHeader/UserHeader";
import HeroSection from "@/sections/home/HeroSection";
import InspireSection from "@/sections/home/InspireSection";
import PickYourRideSection from "@/sections/home/PickYourRideSection";
import ShopByPrice from "@/sections/home/ShopByPrice";
import styles from "./page.module.css";
import Slider from "@/sections/home/Slider";
export default function Home() {
  return (
    <>
      <UserHeader />
      <main>
        <HeroSection />
        <ShopByPrice />
        <InspireSection />
        <PickYourRideSection />
        <Slider />
      </main>
    </>
  );
}
