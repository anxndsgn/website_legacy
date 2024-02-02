/* eslint-disable @next/next/no-img-element */

export default function BG() {
  return (
    <div className="h-svh w-svw fixed top-0 left-0 z-[-1]">
      <img
        src="/bg.svg"
        alt=""
        className=" fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2  scale-125"
      />
      <img
        src="/bg.svg"
        alt=""
        className=" fixed bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-125"
      />
    </div>
  );
}
