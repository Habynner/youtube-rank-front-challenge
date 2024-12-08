import Video from "./model/Video";
import Usuario from "./model/Usuario";

import criarUsuarioVazio from "./functions/criarUsuarioVazio";
import criarVideoVazio from "./functions/criarVideoVazio";

export type { Video, Usuario };
export * from "./shared";
export {
    criarUsuarioVazio,
    criarVideoVazio
}