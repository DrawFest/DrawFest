xport const AnnouncementBanner = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col break-words border-slate-500 my-5 p-2.5 rounded-[3px] border-l-[5px] border-b border-r border-t border-solid">
      <div className="items-center box-border caret-transparent flex justify-between break-words w-full mb-4 mx-auto">
        <i className="text-lg box-border caret-transparent block leading-[18px] break-words ml-2.5 mr-[15px] font-font_awesome_6_pro before:accent-auto before:box-border before:caret-transparent before:text-neutral-200 before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_pro"></i>
        <div className="box-border caret-transparent break-words mx-auto">
          <div className="box-border caret-transparent break-words mx-auto">
            <span className="text-[21.6px] box-border caret-transparent leading-[32.4px] break-words">
              Thank you for participating in DrawFest 2025!
            </span>
          </div>
          <div className="box-border caret-transparent break-words mx-auto"></div>
          <div className="box-border caret-transparent break-words mx-auto">
            We&#39;d love your feedback - did you enjoy DrawFest this year?
            Anything you&#39;d change? Please let us know via the{" "}
            <a
              href="https://form.artfight.net/feedback"
              className="text-blue-300 box-border caret-transparent break-words hover:text-teal-400 hover:underline hover:border-teal-400"
            >
              <b className="font-bold box-border caret-transparent break-words">
                2025 Feedback Form!
              </b>
            </a>
            <b className="font-bold box-border caret-transparent break-words"></b>
          </div>
          <div className="box-border caret-transparent break-words mx-auto">
            <img
              src="https://c.animaapp.com/mi7ttux6JpWCPI/assets/ThankYou2025.png"
              alt="ThankYou2025.png"
              className="box-border caret-transparent max-h-[1000px] max-w-full break-words"
            />
          </div>
        </div>
        <span
          title=""
          className="self-start box-border caret-transparent block leading-[14.4px] break-words font-font_awesome_6_pro before:accent-auto before:box-border before:caret-transparent before:text-neutral-200 before:text-[14.4px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[14.4px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_pro"
        ></span>
      </div>
    </div>
  );
};
