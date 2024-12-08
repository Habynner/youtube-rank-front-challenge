
import Rank from "@/templates/Rank";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
        h-screen flex flex-col justify-center items-center gap-12
        bg-[url('/background-inicio.svg')] bg-cover
      "
    >
      <div className="flex flex-col items-center gap-4">
        <Rank />
        <h1 className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Não fique de fora!!! Participe da comunidade, vote e ajude a eleger o melhor video do youtube!
        </h1>
      </div>
      <Link href="/login" className="botao azul text-lg uppercase">
        Sing in
      </Link>
    </div>
  );
}
