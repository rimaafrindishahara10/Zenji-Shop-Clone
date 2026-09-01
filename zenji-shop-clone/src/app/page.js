import About from "@/components/About";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import StackingCollection from "@/components/StackingCollection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-[calc(2.25rem+72px)]">
      <Hero />
      <About />
      <StackingCollection />
      <ProductGrid />
    </main>
  );
}
