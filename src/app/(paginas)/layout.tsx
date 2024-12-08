import { Toaster } from "@/components/ui/toaster";
import { ProvedorContextoMensagens } from "@/data/contexts/ContextoMensagens";
import { ProvedorContextoRank } from "@/data/contexts/ContextoRank";
import Pagina from "@/templates/Pagina";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout(props: any) {
  return (
    <ProvedorContextoMensagens>
      <ProvedorContextoRank>
      <Pagina>{props.children}</Pagina>
        <Toaster />
      </ProvedorContextoRank>
    </ProvedorContextoMensagens>
  );
}
