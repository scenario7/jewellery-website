import Image from "next/image";
import { Federo } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import AboutUsSummary from "@/components/AboutUsSummary";
import ServicesSummary from "@/components/ServicesSummary";
import OurCollection from "@/components/OurCollection";
import WholesaleNeeds from "@/components/WholesaleNeeds";
import CustomFooter from "@/components/CustomFooter";
import Steps from "@/components/Steps";

const poppins = Federo({
  weight: ["400"], // Specify weights
  subsets: ["latin"],    // Choose subsets
});

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-36">
      <HeroSection/>
      <AboutUsSummary/>
      <ServicesSummary/>
      <WholesaleNeeds/>
      <Steps/>
      <OurCollection/>
      <CustomFooter showLogo={true}/>
    </div>
  );
}
