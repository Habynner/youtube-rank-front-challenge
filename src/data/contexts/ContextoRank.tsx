/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { criarUsuarioVazio, criarVideoVazio, Usuario, Video } from "../../core";
import { createContext, useCallback, useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import { useRouter } from "next/navigation";
import useMensagens from "../hooks/useMensagens";

export interface ContextoRankProps {
  video: Partial<Video>;
  usuario: Partial<Usuario>;
  aliasValido: boolean;

  alterarVideo(video: Partial<Video>): void;
  alterarUsuario(usuario: Partial<Usuario>): void;

  carregarVideos(): Promise<void>;
  salvarVideo(): Promise<void>;
  fazerLogin(): Promise<void>;
  updateVideo(id: string, votes: number): Promise<void>;
  adicionarUsuario(): void;
}

const ContextoRank = createContext<ContextoRankProps>({} as any);

export function ProvedorContextoRank(props: any) {
  const { httpGet, httpPost, httpPut } = useAPI();
  const { adicionarErro } = useMensagens();
  const router = useRouter();

  const [aliasValido, setAliasValido] = useState(true);
  const [video, setVideo] = useState<Partial<Video>>(criarVideoVazio());
  const [usuario, setUsuario] = useState<Partial<Usuario>>(criarUsuarioVazio());


  const salvarVideo = useCallback(
    async function () {
      try {
        video.userId = "a61a9056-1165-46ed-9bee-ab2cd288d70";
        video.votes = 0;
        const videoCriado = await httpPost("/videos", video);
        router.push("/ranking");
        setVideo(videoCriado);
      } catch (error: any) {
        adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [video, httpPost, router]
  );

  const carregarVideos = useCallback(
    async function () {
      try {
        const evento = await httpGet(`/videos`);
        if (!evento) return;
        setVideo(evento);
      } catch (error: any) {
        adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpGet, setVideo]
  );

  const updateVideo = useCallback(
    async function (id: string, votes: number) {
      try {
        console.log(votes);
        await httpPut(`/videos/${id}`, {votes: votes});
      } catch (error: any) {
        adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpPost, video, usuario, router]
  );

  const adicionarUsuario = useCallback(
    async function () {
      try {
        await httpPost(`/users`, usuario);
        router.push("/login");
      } catch (error: any) {
        adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpPost, video, usuario, router]
  );

  const fazerLogin = useCallback(
    async function () {
      try {
        await httpPost(`/auth/login`, {username: usuario.email, password: usuario.senha});
        router.push("/home");
      } catch (error: any) {
        adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpPost, video, usuario, router]
  );

  const validarAlias = useCallback(
    async function () {
      try {
        const { valido } = await httpGet(
          `/videos/validar/${video.alias}`
        );
        setAliasValido(valido);
      } catch (error: any) {
        adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpGet, video]
  );

  useEffect(() => {
    if (video?.alias) validarAlias();
  }, [video?.alias, validarAlias]);

  return (
    <ContextoRank.Provider
      value={{
        video,
        usuario,
        aliasValido,
        alterarVideo: setVideo,
        alterarUsuario: setUsuario,
        salvarVideo,
        carregarVideos,
        updateVideo,
        adicionarUsuario,
        fazerLogin
      }}
    >
      {props.children}
    </ContextoRank.Provider>
  );
}

export default ContextoRank;
