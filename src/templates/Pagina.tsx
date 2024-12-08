import Rank from "./Rank";

export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div
      className="
        flex flex-col items-center py-10 min-h-screen
        bg-[url('/bg-rancking.png')] bg-cover
      "
    >
      <Rank />
      <main
        className={`
            flex-1 flex flex-col justify-center py-10
            container ${props.className}
        `}
      >
        {props.children}
      </main>
    </div>
  );
}
