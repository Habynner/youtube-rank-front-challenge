import Video from "@/core/model/Video";
import AcessarViaQrCode from "./AcessarViaQRCode";
import Link from "next/link";

export interface VideoItemProps {
  video: Video;
}

export default function VideoItem(props: VideoItemProps) {
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
        <span className="text-xl font-bold">
          {props.video.votes}
        </span>
      </div>
    </li>
  );
}
