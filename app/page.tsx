import type { Metadata } from "next";
import HeroSection from "../components/home/HeroSection";
import OverFifthteenYears from "@/components/home/OverFifthteenYears";
import ProjectStatus from "@/components/home/ProjectStatus";
import Procedures from "@/components/home/Procedures";
import AboutThassosLand from "@/components/home/AboutThassosLand";


export const metadata: Metadata = {
  title: 'Molos Homes | Construction Skala Potamias in Thassos',
  description: 'Building your dream house at Skala Potamias in Thassos',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectStatus />
      <OverFifthteenYears />
      <Procedures />
      <AboutThassosLand />
    </>
  );
}