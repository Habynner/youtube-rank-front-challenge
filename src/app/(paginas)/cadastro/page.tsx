"use client";
import Cadastrar from "../../../components/login/Cadastrar";
import useRank from "@/data/hooks/useRank";


export default function PaginaCadastro() {
    const { adicionarUsuario } = useRank()
    return (
        <div className="flex flex-col pt-14">
            <Cadastrar />
            <div className="grid grid-cols-1 gap-4 w-full max-w-md mt-6">
                <span>
                    <button onClick={adicionarUsuario} className="botao azul text-lg uppercase">
                        Submit
                    </button>
                </span>
            </div>
            </div>
    )
}