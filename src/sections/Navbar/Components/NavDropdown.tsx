import React from "react";

export type NavDropdownProps = {
  icon: string;
  label: string;
  sections: Array<{
    title?: string;
    links: Array<{
      href: string;
      text: string;
    }>;
    hasSeparator?: boolean;
  }>;
};

export const NavDropdown = (props: NavDropdownProps) => {
  return (
    <li className="relative box-border caret-transparent min-h-0 min-w-0 mr-4 md:min-h-[auto] md:min-w-[auto]">
      <a
        role="button"
        className="text-white/50 box-border caret-transparent block text-nowrap px-0 py-2 md:px-2 after:accent-auto after:box-border after:caret-transparent after:text-white/50 after:inline-block after:text-[14.4px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21.6px] after:list-outside after:list-none after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:text-nowrap after:visible after:ml-[3.672px] after:border-t-4 after:border-x-transparent after:border-x-4 after:border-y-white/50 after:border-separate after:font-apple_system hover:text-white/80 hover:border-white/80"
      >
        <i className={props.icon}></i> {props.label}
      </a>
      <div className="static bg-clip-padding bg-neutral-800 box-border caret-transparent hidden min-w-40 z-[1000] border mt-0.5 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-black/20 left-0 top-full md:absolute">
        {props.sections.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            {section.title && (
              <div className="text-gray-500 text-[12.6px] box-border caret-transparent leading-[18.9px] text-nowrap px-6 py-2">
                {section.title}
              </div>
            )}
            {section.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.href}
                className="box-border caret-transparent clear-both block text-nowrap w-full px-6 py-1 hover:bg-zinc-600"
              >
                {link.text}
              </a>
            ))}
            {section.hasSeparator &&
              (sectionIndex < props.sections.length - 1 ? (
                <div
                  role="separator"
                  className="border-b-neutral-200 border-l-neutral-200 border-r-neutral-200 border-t-neutral-700 box-border caret-transparent h-0 overflow-hidden my-2 border-t"
                ></div>
              ) : (
                <hr className="text-zinc-500 border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-neutral-700 caret-transparent h-0 mt-2 mb-1 mx-auto border-b-0 border-x-0" />
              ))}
          </React.Fragment>
        ))}
      </div>
    </li>
  );
};
