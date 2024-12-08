"use client";
import ListaVideosVotados from "@/components/votes/ListaVideosVotos";
import { Video } from "@/core";
import useAPI from "@/data/hooks/useAPI";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const { httpGet } = useAPI();
  const [videos, setVideos] = useState<Video[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalVideos, setTotalVideos] = useState(0);

  const obterVideos = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const response = await httpGet(`videos/findVideos?page=${page}&limit=2`);
      setVideos(response.videos);
      setTotalVideos(response.total);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Erro ao obter vídeos:", error);
    } finally {
      setLoading(false);
    }
  }, [httpGet]);

  useEffect(() => {
    obterVideos(page);
  }, [page, obterVideos]);

  return (
    <div className="flex flex-col justify-between items-center gap-10">
      <div className="flex-grow pt-1 w-full">

      <Link href="/criacao" className="botao nav text-lg text-center py-2">Create New</Link>
      <Link href="/ranking" className="botao nav2 text-lg text-center py-2">Ranking</Link>
      <p className="flex-grow items-center pt-3 w-full">
        Vote nos vídeos e ajude a eleger o mais votado. Aproveite e acesse qualquer um diretamente no youtube pelo celular o clicando no link!
        </p>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ListaVideosVotados videos={videos} />
        )}
      </div>

      <div className="flex flex-col gap-5">

      <div className="flex items-center gap-5">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="text-xs text-yellow-600"
        >
          Back
        </button>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="text-xs text-red-600"
        >
          Next
        </button>
        </div>

      </div>
      <p>
        Página {page} de {totalPages} ({totalVideos} vídeos)
      </p>
    </div>
  );
}
