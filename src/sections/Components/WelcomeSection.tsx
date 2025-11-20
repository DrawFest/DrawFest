import { AnnouncementBanner } from "@/sections/MainContent/components/AnnouncementBanner";

export const WelcomeSection = () => {
  return (
    <div className="box-border caret-transparent break-words text-center">
      <h1 className="text-4xl font-medium box-border caret-transparent leading-[43.2px] break-words mb-2">
        Welcome to DrawFest!
      </h1>
      <h3 className="text-zinc-300 text-[25.2px] box-border caret-transparent leading-[30.24px] break-words">
        The annual art gifting game, starting on December 1st!
      </h3>
      <AnnouncementBanner />
    </div>
  );
};
