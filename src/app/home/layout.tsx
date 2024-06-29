import Image from "next/image";
import Link from "next/link";
import Background from "../../../public/Background.png";

export default function notFound() {
  return (
    <div className="min-h-screen w-full bg-transparent">
      <div className="z-10">
        <h1 className="text-2xl font-extrabold text-center">
          Obs... Essa página ainda não foi desenvolvida!
        </h1>
        <p className="font-light italic text-center text-muted-foreground">
          Volte para a{" "}
          <Link href={"/home"} className="border-b-2">
            página principal
          </Link>
        </p>
      </div>
      <Image
        src={Background}
        alt="Background do site SoundBass(imagem abstrata)"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
    </div>
  );
}