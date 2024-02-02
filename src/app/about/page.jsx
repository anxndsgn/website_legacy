/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { projectData } from "../../projects";
import { Header } from "@/components/header";
import BG from "@/components/bg";

export default function About() {
  return (
    <div>
      <Header isAbout={true} />

      <div className="w-10/12 m-auto text-xl font-light flex flex-col gap-7">
        <img
          src="/about.png"
          alt=""
          className=" w-24 lg:w-32 hover:-rotate-12 hover:scale-105 transition-all col-span-6 "
        />
        {/* <h1 className="italic md:not-italic underline">projects</h1> */}
        <section>
          <p className="text-4xl">👋</p>
          <span> Hi, I am </span>
          <a
            href="https://twitter.com/anxndsgn"
            className="underline"
            target="_blank"
          >
            Xin
          </a>
          <br />
          Postgraduate in Industrial Design Engineering <br />
          I just love making beautiful things. <br />
          Design for fun.
        </section>
      </div>
      <BG />
    </div>
  );
}
