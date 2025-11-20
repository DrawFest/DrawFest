export const FooterDonation = () => {
  return (
    <div className="relative bg-[url('')] box-border caret-transparent basis-auto shrink max-w-none w-full mb-6 pt-[23px] px-[15px] md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]">
      <div className="box-border caret-transparent flex">
        <div className="text-zinc-50 box-border caret-transparent w-[90%] m-auto">
          <progress
            value="195397"
            className="text-sky-600 caret-transparent h-5 w-full"
          ></progress>
          <br className="box-border caret-transparent" />
          <div className="box-border caret-transparent flex mt-2">
            <div className="box-border caret-transparent">
              2026 Contributions:{" "}
              <b className="font-bold box-border caret-transparent">$0</b>
              <br className="box-border caret-transparent" />
              Goal: $20{" "}
              <a
                href="LINK"
                className="box-border caret-transparent hover:underline"
              >
                <i
                  title=""
                  className="box-border caret-transparent inline-block leading-[14.4px] font-font_awesome_6_pro before:accent-auto before:box-border before:caret-transparent before:text-zinc-50 before:text-[14.4px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[14.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_pro"
                ></i>
              </a>
            </div>
            <form className="box-border caret-transparent ml-auto">
              <button
                type="submit"
                title=""
                className="text-white bg-slate-500 caret-transparent text-center align-middle border border-slate-500 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid hover:bg-cyan-800 hover:border-cyan-800"
              >
                Support
              </button>
            </form>
          </div>
        </div>
        <div className="box-border caret-transparent ml-2">
          <img
            src="IMAGE"
            className="box-border caret-transparent max-h-[100px] max-w-full"
          />
        </div>
      </div>
    </div>
  );
};
