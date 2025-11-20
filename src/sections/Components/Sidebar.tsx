import { NewsSection } from "@/sections/MainContent/components/NewsSection";
import { DiscordWidget } from "@/sections/MainContent/components/DiscordWidget";
import { FeaturedMembers } from "@/sections/MainContent/components/FeaturedMembers";

export const Sidebar = () => {
  return (
    <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full break-words w-full px-[15px] md:basis-[41.6667%] md:max-w-[41.6667%]">
      <hr className="text-zinc-500 border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-neutral-700 caret-transparent block h-0 break-words mx-auto my-4 border-b-0 border-x-0 md:hidden" />
      <NewsSection />
      <h3 className="text-[25.2px] font-medium box-border caret-transparent leading-[30.24px] break-words text-ellipsis text-nowrap overflow-hidden mb-2">
        <a
          href="https://artfight.net/news/106.art-fight-november-update"
          className="text-blue-300 box-border caret-transparent break-words text-nowrap hover:text-teal-400 hover:underline hover:border-teal-400"
        >
          DrawFest November Update
        </a>
      </h3>
      Hello DrawFesters!
      <br className="box-border caret-transparent break-words" />
      <br className="box-border caret-transparent break-words" />
      The development period is over and the site has now been re-opened! Thank
      you so much for your patience. This period was greatly needed and going
      forward, we will likely continue to have an annual break period dedicated
      to development. Please find a summary of all that has been achieved during
      the break below, alongside additional news!...
      <a
        href="https://artfight.net/news/106.art-fight-november-update"
        className="text-blue-300 box-border caret-transparent break-words hover:text-teal-400 hover:underline hover:border-teal-400"
      >
        read more
      </a>
      <hr className="text-zinc-500 border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-neutral-700 caret-transparent h-0 break-words mx-auto my-4 border-b-0 border-x-0" />
      <DiscordWidget />
      <FeaturedMembers />
    </div>
  );
};
