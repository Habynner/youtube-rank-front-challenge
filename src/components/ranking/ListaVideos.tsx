import Video from "@/core/model/Video";
import VideoItem from "./VideoItem";

export interface ListaVideosProps {
  videos: Video[];
}

export default function ListaVideos(props: ListaVideosProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 overflow-x-auto">
      <ul className="grid gap-6">
        {props.videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
