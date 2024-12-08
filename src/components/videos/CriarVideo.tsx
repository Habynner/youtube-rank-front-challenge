import useRank from "../../data/hooks/useRank";
import CampoEntrada from "../shared/CampoEntrada";


export default function CriarVideo() {
    const { video, alterarVideo } = useRank();

    return (
        <div className="flex flex-col gap-5">
        <CampoEntrada
            label="Name"
            descricao="Digite o nome do vídeo"
            value={video.name ?? ""}
            onChange={(e) =>
                alterarVideo({
                 ...video,
                 name: e.target.value,
                 })
              }
        />
        <CampoEntrada
            label="Alias"
            descricao="Digite um apelido para o vídeo"
            value={video.alias ?? ""}
            onChange={(e) =>
                alterarVideo({ ...video, alias: e.target.value })
              }
        />
        <CampoEntrada
            label="URL"
            descricao="Digite a url do vídeo"
            value={video.url ?? ""}
            onChange={(e) =>
                alterarVideo({ ...video, url: e.target.value })
              }
        />
        <CampoEntrada
            label="Description"
            descricao="Digite uma descrição para o vídeo"
            value={video.description ?? ""}
            onChange={(e) =>
                alterarVideo({ ...video, description: e.target.value })
              }
        />
        <CampoEntrada
            label="Category"
            descricao="Digite a categoria do vídeo"
            value={video.category ?? ""}
            onChange={(e) =>
                alterarVideo({ ...video, category: e.target.value })
              }
              observacao="(Música, Entretenimento, PodCast, Estudo, Jornalismo)"
        />
        </div>
    )
}