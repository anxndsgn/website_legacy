/* eslint-disable @next/next/no-img-element */
import { projectData } from "@/DATA/projectData";
import { Header } from "@/components/header";
import BG from "@/components/bg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative mb-10">
      <Header rightLink={""} />
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6 m-auto w-10/12 items-start relative">
        <About />
        <Projects />
      </div>
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
          className="underline"
          target="_blank"
        >
          Xin
        </a>{" "}
        .<p>Postgraduate in Industrial Design Engineering. </p>
        <p>Multidisciplinary.</p>
        <p>Familiar with Figma/PS/Rhino/Fusion 360/Keyshot/Kicad.</p>
        <p>Learning JavaScript, React and Python.</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className=" col-span-2 md:col-span-3 lg:col-span-4 grid grid-cols-subgrid gap-y-5">
      {projectData.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
}

function Project({ project }) {
  return (
    <Link href={`/project/${project.id}`}>
      <div className=" w-full flex flex-col gap-3 place-content-start">
        <img
          src={project.thumbnail}
          alt=""
          className=" w-full h-full aspect-square object-cover hover:rounded-se-[50%] transition-all"
        />

        <div className="text-base lg:text-xl font-light">
          {project.projectName}
        </div>
      </div>
    </Link>
  );
}
