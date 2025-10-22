import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import Image from "next/image";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-8">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-16 flex flex-col items-center gap-6">
        <h1 className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          Ofertat që kërkon,<span className="text-muted-foreground block">në një aplikacion.</span>
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          Shfleto katalogët javorë, krahaso çmimet dhe gjej ofertat më pranë teje.
        </p>
        <Image src="/app-image-1.png" alt="Hero" width={304} height={445} />
      </div>
    </div>
  );
}
