import { Bodoni_Moda } from "next/font/google";
import Link from "next/link";

const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});

export function Header({
  leftTitle = `about`,
  leftLink = `/about`,
  rightTitle = `projects`,
  rightLink = `/`,
}) {
  return (
    <div
      className={`sticky top-10 flex flex-row m-auto w-10/12 place-content-between mb-20 z-10 text-2xl md:text-3xl lg:text-5xl ${bodoni.className} transition-all`}
    >
      {leftLink ? (
        <Link href={leftLink}>
          <h1 className="italic  underline hover:text-lime-400 ">
            {leftTitle}
          </h1>
        </Link>
      ) : (
        <h1>{leftTitle}</h1>
      )}

      {rightLink ? (
        <Link href={rightLink}>
          <h1 className="italic  underline hover:text-lime-400">
            {rightTitle}
          </h1>
        </Link>
      ) : (
        <h1>{rightTitle}</h1>
      )}
    </div>
  );
}
