"use client";
import useRank from "@/data/hooks/useRank";
import Acessar from "../../../components/login/Acessar";
import Link from "next/link";

export default function PaginaLogin() {
    const { fazerLogin } = useRank()
    return (
        <div className="flex flex-col pt-14">

            <Acessar />

            <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-6">
                <button onClick={fazerLogin} className="botao cinza text-lg text-center py-2">
                    Login
                </button>
                <Link href="/cadastro" className="botao vermelho text-lg text-center py-2">
                    Register
                </Link>
            </div>
        </div>
    );
}
