import { Navbar } from "@/sections/Navbar";
import { HeroBanner } from "@/sections/HeroBanner";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-neutral-200 text-[14.4px] not-italic normal-nums font-normal accent-auto bg-neutral-800 box-border caret-transparent block h-full tracking-[normal] leading-[21.6px] list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-apple_system">
      <div className="relative box-border caret-transparent min-h-full">
        <Navbar />
        <HeroBanner />
        <MainContent />
        <Footer />
      </div>
    </body>
  );
};
