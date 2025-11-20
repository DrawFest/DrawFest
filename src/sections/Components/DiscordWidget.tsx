export const DiscordWidget = () => {
  return (
    <div className="bg-neutral-700 box-border caret-transparent inline-block break-words w-full rounded-[7px]">
      <div className="text-white text-base bg-zinc-800/60 box-border caret-transparent inline-block leading-4 break-words w-full border border-zinc-800/90 pl-2.5 pr-[15px] py-2.5 rounded-[7px] border-solid font-roboto">
        <h5 className="text-gray-400 text-xs font-medium box-border caret-transparent basis-0 grow h-4 tracking-[1px] break-words text-ellipsis uppercase overflow-hidden mb-2">
          COME CHAT WITH US ON DISCORD!
        </h5>
        <div className="box-border caret-transparent flex h-[50px] break-words">
          <div className="relative bg-clip-padding bg-neutral-700 bg-[url('https://cdn.discordapp.com/icons/205192282259980288/1fda25c66f77be995b8b16d5341dead8.png')] bg-size-[100%_100%] box-border caret-transparent shrink-0 h-[50px] break-words w-[50px] bg-center mr-2.5 rounded-[15px] inset-0"></div>
          <div className="items-stretch box-border caret-transparent flex flex-col grow h-[50px] justify-center break-words">
            <div className="text-neutral-100 font-medium box-border caret-transparent h-5 leading-5 break-words text-ellipsis overflow-hidden mb-1 hover:underline">
              <span className="box-border caret-transparent break-words">
                DrawFest
              </span>
            </div>
            <div className="text-zinc-500 text-xs font-bold box-border caret-transparent h-4 break-words text-ellipsis overflow-hidden font-roboto_condensed">
              <div className="items-center box-border caret-transparent flex h-4 justify-start break-words">
                <i className="italic bg-emerald-400 box-border caret-transparent block h-2 break-words w-2 mr-1 rounded-[50%]"></i>
                <span className="box-border caret-transparent block h-4 leading-[normal] break-words mr-2">
                  88,368 Online
                </span>
                <i className="italic bg-slate-500 box-border caret-transparent block h-2 break-words w-2 mr-1 rounded-[50%]"></i>
                <span className="box-border caret-transparent block h-4 leading-[normal] break-words">
                  403,979 Members
                </span>
              </div>
            </div>
          </div>
         </div>
          <button
            type="button"
            className="relative text-sm font-medium items-center self-center bg-emerald-400 caret-transparent flex h-10 justify-center leading-5 min-h-8 min-w-[73px] break-words text-center ml-2.5 px-4 py-0.5 rounded-[3px] inset-0 hover:bg-green-500"
          >
            <div className="box-border caret-transparent flex h-5 break-words text-ellipsis overflow-hidden mx-2">
              Join
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
