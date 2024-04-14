import { CarouselPluginClientSide } from "@/components/carousel-client";
import { CarouselPluginServerSide } from "@/components/carousel-server";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CarouselPluginClientSide />
      {/* <CarouselPluginServerSide /> this is expected to error */}
    </main>
  );
}
