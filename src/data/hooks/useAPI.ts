/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";

// const urlBase = process.env.EXPO_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (caminho: string) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `http://localhost:4000${uri}`;

    const resposta = await fetch(urlCompleta);
    return extrairDados(resposta);
  }, []);

  const httpPost = useCallback(async function (caminho: string, body?: any) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `http://localhost:4000${uri}`;

    const resposta = await fetch(urlCompleta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    return extrairDados(resposta);
  }, []);

  const httpPut = useCallback(async function (caminho: string, body?: any) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `http://localhost:4000${uri}`;

    const resposta = await fetch(urlCompleta, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    return extrairDados(resposta);
  }, []);

  const httpGetMe = useCallback(async function (caminho: string, token: string) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `http://localhost:4000${uri}`;

    const resposta = await fetch(urlCompleta, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
    return extrairDados(resposta);
  }, []);

  async function extrairDados(reposta: Response) {
    let conteudo: any;

    try {
      conteudo = await reposta.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      if (!reposta.ok) {
        throw new Error(
          `Ocorreu um erro inesperado com status ${reposta.status}.`
        );
      }
      return null;
    }
    if (!reposta.ok) throw conteudo;
    return conteudo;
  }

  return { httpGet, httpPost, httpPut, httpGetMe };
}
