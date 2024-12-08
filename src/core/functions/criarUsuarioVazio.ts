import Usuario from "../model/Usuario";

export default function criarUsuarioVazio(): Partial<Usuario> {
  return {
    nome: "",
    email: "",
    senha: "",
  };
}
