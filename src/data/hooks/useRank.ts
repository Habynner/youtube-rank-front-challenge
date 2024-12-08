import { useContext } from "react";
import ContextoRank from "../contexts/ContextoRank";

const useRank = () => useContext(ContextoRank);
export default useRank;
