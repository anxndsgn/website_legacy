/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { projectData } from "../../projects";
import { Header } from "@/components/header";
import BG from "@/components/bg";

export default function About() {
  return (
    <div>
      <Header isAbout={true} />

      <div className="w-10/12 m-auto text-lg font-light flex flex-col gap-7 mb-10">
        <img
          src="/about.png"
          alt=""
          className=" w-24 lg:w-32 hover:-rotate-12 hover:scale-105 transition-all "
        />
        {/* <h1 className="italic md:not-italic underline">projects</h1> */}
        <section className="grid grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <p className="text-4xl">👋</p>
            <p>
              <span> Hi, I am </span>
              <a
                href="https://twitter.com/anxndsgn"
                className="underline"
                target="_blank"
              >
                Xin
              </a>
            </p>

            <p>Postgraduate in Industrial Design Engineering</p>
            <p>Researching in HCI {"(Human-Computer Interaction)"}. </p>
            <p>
              As a human interface designer, I am interested in design
              engineering, design ops and design systems, which I call{" "}
              {'"Design for Development (DfD)"'}.
            </p>
            <p>
              And I have always made natural, intuitive design my first
              principle, and, of course, with good looks.
            </p>
            {/* <p>
              The word design to me represents the purposeful creation of human
              beings, which can be as small as looking good and communicating
              information better, or as large as developing a system or a set of
              rules.
            </p> */}
          </div>
        </section>
      </div>
      <BG />
    </div>
  );
}
