import { Bodoni_Moda } from "next/font/google";
import Link from "next/link";

const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});

export default function Header({ isAbout = false }) {
  const linkStyle = `hover:text-[#BEFF33]`;
  if (isAbout) {
    return (
      <header
        className={`flex flex-row m-auto w-10/12 place-content-between my-10 md:my-16 text-2xl md:text-3xl lg:text-5xl ${bodoni.className}`}
      >
        <h1>about</h1>
        <Link href="/">
          <h1 className="italic underline">projects</h1>
        </Link>
      </header>
    );
  } else {
    return (
      <div
        className={`flex flex-row m-auto w-10/12 place-content-between my-10 md:my-16 text-2xl md:text-3xl lg:text-5xl ${bodoni.className}`}
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
}
