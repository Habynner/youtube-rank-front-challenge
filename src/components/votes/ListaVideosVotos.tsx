import Video from "@/core/model/Video";
import VoteItem from "./VoteItem";

export interface ListaVideosProps {
  videos: Video[];
}

export default function ListaVideosVotados(props: ListaVideosProps) {
  console.log(props.videos)
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 overflow-x-auto">
      <ul className="grid gap-6">
        {props.videos.map((video) => (
          <VoteItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
