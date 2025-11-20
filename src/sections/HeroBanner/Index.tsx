export const HeroBanner = () => {
  return (
    <div className="box-border caret-transparent mb-4">
      <a
        href="/"
        className="text-blue-300 box-border caret-transparent hover:text-teal-400 hover:underline hover:border-teal-400"
      >
        <div className="bg-[url('https://artfight.net/images/default_banner.jpg')] bg-cover box-border caret-transparent h-[200px] bg-[position:50%_top]"></div>
      </a>
    </div>
  );
};
