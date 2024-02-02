import { Bodoni_Moda } from "next/font/google";
import Link from "next/link";

const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});

export function Header({ isAbout = false }) {
  if (isAbout) {
    return (
      <header
        className={`sticky top-10 flex flex-row m-auto w-10/12 place-content-between mb-20 z-10 text-2xl md:text-3xl lg:text-5xl ${bodoni.className}`}
      >
        <h1>about</h1>
        <Link href="/">
          <h1 className="italic underline">projects</h1>
        </Link>
      </header>
    );
  }

  return (
    <div
      className={`sticky top-10 flex flex-row m-auto w-10/12 place-content-between mb-20 z-10 text-2xl md:text-3xl lg:text-5xl ${bodoni.className}`}
    >
      <Link href="/about">
        <h1 className="italic md:not-italic underline md:no-underline">
          about
        </h1>
      </Link>
      <h1>projects</h1>
    </div>
  );
}
