import { NavDropdown } from "@/sections/Navbar/components/NavDropdown";

export type NavMenuProps = {
  variant: string;
  discordLink?: string;
  helpDropdown?: {
    icon: string;
    label: string;
    sections: Array<{
      title?: string;
      links: Array<{ href: string; text: string }>;
      hasSeparator?: boolean;
    }>;
  };
  shopDropdown?: {
    icon: string;
    label: string;
    sections: Array<{
      links: Array<{ href: string; text: string }>;
      hasSeparator?: boolean;
    }>;
  };
  registerLink?: string;
  loginLink?: string;
};

export const NavMenu = (props: NavMenuProps) => {
  return (
    <ul
      className={`box-border caret-transparent flex flex-col list-none min-h-0 min-w-0 pl-0 md:flex-row md:min-h-[auto] md:min-w-[auto] ${props.variant}`}
    >
      {props.discordLink && (
        <li className="box-border caret-transparent min-h-0 min-w-0 mr-4 md:min-h-[auto] md:min-w-[auto]">
          <a
            href={props.discordLink}
            className="text-white/50 box-border caret-transparent block px-0 py-2 md:px-2 hover:text-white/80 hover:border-white/80"
          >
            <i className="box-border caret-transparent inline-block leading-[14.4px] font-font_awesome_6_brands before:accent-auto before:box-border before:caret-transparent before:text-white/50 before:text-[14.4px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[14.4px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_brands"></i>{" "}
            Discord
          </a>
        </li>
      )}
      {props.helpDropdown && (
        <NavDropdown
          icon={props.helpDropdown.icon}
          label={props.helpDropdown.label}
          sections={props.helpDropdown.sections}
        />
      )}
      {props.shopDropdown && (
        <NavDropdown
          icon={props.shopDropdown.icon}
          label={props.shopDropdown.label}
          sections={props.shopDropdown.sections}
        />
      )}
      {props.registerLink && (
        <li className="box-border caret-transparent min-h-0 min-w-0 mr-4 md:min-h-[auto] md:min-w-[auto]">
          <a
            href={props.registerLink}
            className="text-white/50 box-border caret-transparent block px-0 py-2 md:px-2 hover:text-white/80 hover:border-white/80"
          >
            Register
          </a>
        </li>
      )}
      {props.loginLink && (
        <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href={props.loginLink}
            className="text-white/50 box-border caret-transparent block px-0 py-2 md:px-2 hover:text-white/80 hover:border-white/80"
          >
            Log In
          </a>
        </li>
      )}
    </ul>
  );
};
