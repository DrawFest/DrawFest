export const MobileMenuToggle = () => {
  return (
    <button
      type="button"
      className="text-white/50 text-lg bg-transparent caret-transparent block leading-[18px] min-h-[auto] min-w-[auto] text-center border px-3 py-1 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-white/10 md:hidden md:min-h-0 md:min-w-0"
    >
      <span className="bg-[url(data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2730%27%20height=%2730%27%20viewBox=%270%200%2030%2030%27%3e%3cpath%20stroke=%27rgba%28255,%20255,%20255,%200.5%29%27%20stroke-linecap=%27round%27%20stroke-miterlimit=%2710%27%20stroke-width=%272%27%20d=%27M4%207h22M4%2015h22M4%2023h22%27/%3e%3c/svg%3e)] bg-no-repeat bg-size-[100%_100%] box-border caret-transparent content-[''] inline-block h-[27px] align-middle w-[27px] bg-center"></span>
    </button>
  );
};
