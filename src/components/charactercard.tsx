export type CharacterCardProps = {
  href: string;
  imageUrl: string;
  linkVariant: string;
};

export const CharacterCard = (props: CharacterCardProps) => {
  return (
    <div className="relative box-border caret-transparent basis-3/12 shrink-0 max-w-[25%] break-words w-full">
      <a
        href={props.href}
        className={`relative text-blue-300 bg-neutral-800 bg-no-repeat box-border caret-transparent inline-block flex-col break-words overflow-hidden bg-center m-1 p-1 rounded-[5px] border-2 border-dotted hover:text-teal-400 hover:underline ${props.linkVariant}`}
      >
        <img
          src={props.imageUrl}
          title=""
          className="box-border caret-transparent max-h-[1000px] max-w-full break-words mx-auto rounded-bl rounded-br rounded-tl rounded-tr"
        />
        <div className="box-border caret-transparent break-words text-center"></div>
      </a>
    </div>
  );
};
