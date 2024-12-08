"use client";
import CriarVideo from "@/components/videos/CriarVideo";
import useRank from "@/data/hooks/useRank";
import Link from "next/link";


export default function PaginaCadastro() {
    const { salvarVideo } = useRank()
    return (
        <div>
        <div className="flex flex-col pt-14">
        <div>
        <Link href="/home" className="botao nav text-lg text-center py-2">Vote</Link>
        <Link href="/ranking" className="botao nav2 text-lg text-center py-2">Ranking</Link>
        </div>
            <CriarVideo />
            <div className="grid grid-cols-1 gap-4 w-full max-w-md mt-6">
                <span>
                    <button onClick={salvarVideo} className="botao azul text-lg uppercase">
                        Save
                    </button>
                </span>
            </div>
            </div>
            </div>
    )
}