import useRank from "../../data/hooks/useRank";
import CampoEntrada from "../shared/CampoEntrada";


export default function Cadastrar() {
    const { usuario, alterarUsuario } = useRank();

    return (
        <div className="flex flex-col gap-5">
        <CampoEntrada
            label="Name"
            descricao="Digite seu nome"
            value={usuario.nome ?? ""}
            onChange={(e) =>
                alterarUsuario({
                 ...usuario,
                 nome: e.target.value,
                 })
              }
        />
        <CampoEntrada
            label="Email"
            descricao="Digite seu e-mail"
            value={usuario.email ?? ""}
            onChange={(e) =>
                alterarUsuario({ ...usuario, email: e.target.value })
              }
        />
        <CampoEntrada
            label="Senha"
            descricao="Digite sua senha"
            value={usuario.senha ?? ""}
            onChange={(e) =>
                alterarUsuario({ ...usuario, senha: e.target.value })
              }
              type="password"
              observacao="Sua senha será criptografada."
        />
        </div>
    )
}