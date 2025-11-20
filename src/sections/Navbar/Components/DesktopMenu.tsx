import { NavMenu } from "@/sections/Navbar/components/NavMenu";

export const DesktopMenu = () => {
  return (
    <div className="items-center box-border caret-transparent hidden basis-full grow flex-wrap min-h-0 min-w-0 md:flex md:basis-auto md:min-h-[auto] md:min-w-[auto]">
      <NavMenu
        variant="mr-auto"
        discordLink="https://discord.gg/artfight"
        helpDropdown={{
          icon: "font-black box-border caret-transparent inline-block leading-[14.4px] text-nowrap font-font_awesome_6_pro before:accent-auto before:box-border before:caret-transparent before:text-white/50 before:text-[14.4px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14.4px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-font_awesome_6_pro",
          label: "Help",
          sections: [
            {
              title: "INFO",
              links: [
                { href: "https://artfight.net/info/about", text: "About" },
                { href: "https://artfight.net/info/rules", text: "Rules" },
                { href: "https://artfight.net/info/faq", text: "FAQ" },
                {
                  href: "https://artfight.net/info/changelog",
                  text: "Changelog",
                },
                {
                  href: "https://artfight.net/info/art-assets",
                  text: "Art Assets",
                },
                {
                  href: "https://artfight.net/modmail/new",
                  text: "Submit a Modmail Inquiry",
                },
              ],
              hasSeparator: true,
            },
            {
              title: "GUIDES",
              links: [
                {
                  href: "https://artfight.net/info/guide-attacks",
                  text: "Attack Categorization",
                },
                {
                  href: "https://artfight.net/info/guide-filters",
                  text: "Filtering Guide",
                },
                {
                  href: "https://artfight.net/info/guide-bbcode",
                  text: "BBCode",
                },
              ],
              hasSeparator: true,
            },
            {
              links: [{ href: "https://artfight.net/news", text: "News" }],
            },
          ],
        }}
        shopDropdown={{
          icon: "font-black box-border caret-transparent inline-block leading-[14.4px] text-nowrap font-font_awesome_6_pro before:accent-auto before:box-border before:caret-transparent before:text-white/50 before:text-[14.4px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14.4px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-font_awesome_6_pro",
          label: "Shop",
          sections: [
            {
              links: [
                {
                  href: "https://artfight.net/donate",
                  text: "Support Art Fight",
                },
              ],
              hasSeparator: true,
            },
            {
              links: [{ href: "https://shop.artfight.net/", text: "Merch" }],
            },
          ],
        }}
      />
      <hr
        role="separator"
        className="text-zinc-500 border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-neutral-700 caret-transparent block h-0 opacity-50 my-2 border-b-0 border-x-0 md:hidden"
      />
      <NavMenu
        variant="ml-auto"
        registerLink="https://artfight.net/register"
        loginLink="https://artfight.net/login"
      />
    </div>
  );
};
