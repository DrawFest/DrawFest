export const FooterLinks = () => {
  return (
    <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full pt-[23px] px-[15px] md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]">
      <ul className="box-border caret-transparent list-none text-center mb-4 pl-0">
        <li className="box-border caret-transparent inline-block mx-2">
          <a
            href="https://artfight.net/info/help"
            className="text-zinc-50 box-border caret-transparent hover:underline"
          >
            Help
          </a>
        </li>
        |
        <li className="box-border caret-transparent inline-block mx-2">
          <a
            href="https://artfight.net/info/contact-us"
            className="text-zinc-50 box-border caret-transparent hover:underline"
          >
            Contact a Mod
          </a>
        </li>
        |
        <li className="box-border caret-transparent inline-block mx-2">
          <a
            href="https://artfight.net/info/rules"
            className="text-zinc-50 box-border caret-transparent hover:underline"
          >
            Rules
          </a>
        </li>
        |
        <li className="box-border caret-transparent inline-block mx-2">
          <a
            href="https://artfight.net/info/tos"
            className="text-zinc-50 box-border caret-transparent hover:underline"
          >
            ToS
          </a>
        </li>
        |
        <li className="box-border caret-transparent inline-block ml-2">
          <a
            href="https://artfight.net/info/privacy"
            className="text-zinc-50 box-border caret-transparent hover:underline"
          >
            Privacy
          </a>
        </li>
      </ul>
      <ul className="box-border caret-transparent list-none text-center mb-4 pl-0">
        <li className="box-border caret-transparent inline-block mr-2">
          <a
            href="https://artfight.net/info/credits"
            className="text-zinc-50 box-border caret-transparent hover:underline"
          >
            Credits
          </a>
        </li>
        |
        <li className="box-border caret-transparent inline-block">
          © 2015{" "}
          <a
            href="https://artfight.net/lolwut"
            className="text-zinc-50 box-border caret-transparent hover:underline"
          >
            -
          </a>
          2026 DrawFest
        </li>
      </ul>
    </div>
  );
};
