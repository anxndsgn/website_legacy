import { projectData } from "@/DATA/projectData";
import { Header } from "@/components/header";
import BG from "@/components/bg";
import Image from "next/image";

export async function generateStaticParams() {
  return projectData.map((post) => ({
    id: projectData.id,
  }));
}

export default function Project({ params }) {
  const project = projectData.find(
    (project) => project.id.toString() === params.id
  );
  return (
    <div>
      <Header
        leftTitle={project.projectName}
        leftLink={""}
        rightTitle={"back"}
        rightLink={"/"}
      />
      <div
        className={`w-10/12 m-auto mb-10 flex gap-3 lg:grid lg:grid-cols-6 font-light`}
      >
        {/*侧边文字*/}
        <div className="hidden lg:col-span-2 lg:flex flex-col lg:gap-3 text-sm">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        {/*主图*/}
        <div className="w-full flex gap-3 flex-col lg:col-span-4">
          {project.video ? (
            <iframe
              width="100%"
              height="100%"
              src={project.video}
              frameBorder="0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full object-cover aspect-video"
            ></iframe>
          ) : (
            <Image
              alt={""}
              src={project.img[0]}
              width={1200}
              height={800}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full object-cover aspect-[4/3]"
              quality={100}
            ></Image>
          )}

          <div className="flex flex-col gap-3 text-sm lg:hidden">
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {project.img.slice(1).map((img, index) => (
            <Image
              alt={""}
              src={img}
              width={1200}
              height={800}
              className="w-full object-cover aspect-[4/3]"
              quality={100}
              key={index}
            ></Image>
          ))}
        </div>
      </div>
    </div>
  );
}
