import { Righteous } from "next/font/google";
import Image from "next/image";

const fonte = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Rank() {
  return (
        <div className="grid grid-cols-2">
        <div>
        <Image src="/foguete-ranking.svg" width={120} height={120} alt="Rank" />
        </div>
      <div className={`flex flex-col items-center gap-2 ${fonte.className}`}>
              <h1 className="flex flex-col items-center text-lg leading-5">
                  <div className="">
                      CHOOSE THE BEST !
                  </div>
                  <div>VOT<span className="text-red-600">3</span></div>
              </h1>
          </div>
          </div>
  );
}

