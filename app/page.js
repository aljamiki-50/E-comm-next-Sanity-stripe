import HeroPage from "@/components/HeroSection.jsx/HeroPage";
import NewstProudcts from "@/components/NewstProudcts/NewstProudcts";
import Image from "next/image";

export const dynamic = 'force-dynamic'


export default function Home() {
  return (
   <div className=" bg-white p-6 sm:p-8 lg:pb-12">
    <HeroPage />
    <NewstProudcts />
   </div>
  );
}
