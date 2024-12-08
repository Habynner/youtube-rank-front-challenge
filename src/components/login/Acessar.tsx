
import useRank from "@/data/hooks/useRank";
import CampoEntrada from "../shared/CampoEntrada";



export default function Acessar() {
    const { usuario, alterarUsuario } = useRank();
    return (
        <div className="flex flex-col gap-5">
        <CampoEntrada
            label="Email"
            value={usuario.email ?? ""}
            onChange={(e) =>
                alterarUsuario({ ...usuario, email: e.target.value })
              }
              descricao="Digite seu e-mail"
        />
        <CampoEntrada
            label="Senha"
            value={usuario.senha ?? ""}
            onChange={(e) =>
                alterarUsuario({ ...usuario, senha: e.target.value })
              }
              type="password"
              descricao="Digite sua senha"
              observacao="Sua senha será criptografada."
        />
        </div>
    )
}