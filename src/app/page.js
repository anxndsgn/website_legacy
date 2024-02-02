/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { projectData } from "./projects";
import Header from "@/componets/header";
import BG from "@/componets/bg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative mb-10">
      <Header />
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6 m-auto w-10/12 items-start relative">
        <About />
        <Projects />
      </div>
      <BG />
    </div>
  );
}

function About() {
  return (
    <div className="hidden  md:col-span-2 md:flex flex-col lg:col-span-2 md:text-base lg:text-xl font-light gap-10">
      <Link href="/about">
        <img
          src="/about.png"
          alt=""
          className=" w-24 lg:w-32 hover:-rotate-12 hover:scale-105 transition-all "
        />
      </Link>

      <div>
        👋 Hi, I am{" "}
        <a
          href="https://twitter.com/anxndsgn"
          className="italic border-b-2"
          target="_blank"
        >
          Xin
        </a>{" "}
        <br />
        Postgraduate in Industrial Design Engineering. <br />
        I just love making beautiful things. <br />
        Design for fun.
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className=" col-span-2 md:col-span-3 lg:col-span-4 grid grid-cols-subgrid gap-y-5">
      {projectData.map((project) => (
        <Project project={project} key={project.projectName} />
      ))}
    </div>
  );
}

function Project({ project }) {
  let link;
  if (project.link) {
    link = project.link;
  } else {
    link = null;
  }
  return (
    <a
      className=" w-full flex flex-col gap-3 place-content-start"
      href={link}
      target="_blank"
    >
      <img
        src={project.img}
        alt=""
        className=" w-full h-full aspect-square object-cover hover:rounded-se-[8rem] transition-all"
      />
      <div className="text-base lg:text-xl font-light">
        {project.projectName}
      </div>
    </a>
  );
}
