import Video from "../model/Video";

export default function criarVideoVazio(): Partial<Video> {
  return {
    alias: "",
    nome: "",
    url: "",
    data: new Date,
    votos: 0
  };
}
