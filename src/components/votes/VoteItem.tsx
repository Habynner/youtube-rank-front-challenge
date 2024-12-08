"use client";
import Video from "@/core/model/Video";
import AcessarViaQrCode from "../ranking/AcessarViaQRCode";
import Link from "next/link";
import { useState } from "react";
import useRank from "@/data/hooks/useRank";

export interface VideoItemProps {
  video: Video;
}

export default function VoteItem(props: VideoItemProps) {
  const { updateVideo } = useRank();
  const [voto, setVoto] = useState(props.video.votes);

  const handleVote = () => {
    const novoVoto = voto + 1;
    setVoto(novoVoto);
    updateVideo(props.video.id, novoVoto);
  };

  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 py-3 border border-zinc-800">
      <div className="flex flex-col">
      <span className="text-sm text-zinc-400">
        <AcessarViaQrCode video={props.video}/>
      </span>
      </div>
      <div className="w-full flex flex-col pl-2 pr-2 pt-12 border border-zinc-800">
      <span className="text-xl text-red-600 font-bold">{props.video.alias}</span>
      <Link href={props.video.url} className="text-sky-600">Link para youTube</Link>
      <span className="text-xl font-bold">{props.video.name}</span>
      </div>
      <div className="grid p-3 border border-zinc-800 py-5 px-10">
      <span className="text-sm text-zinc-400">Votos</span>
        <span className="text-xl pl-2 font-bold">
          {voto}
        </span>
      </div>
      <div className="flex flex-col pt-14 border border-zinc-800 py-5 px-10">
      <button className="botao azul size-12" onClick={handleVote}>Vote</button>
      </div>
    </li>
  );
}
