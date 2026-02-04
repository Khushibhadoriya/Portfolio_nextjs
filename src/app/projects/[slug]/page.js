import {projects} from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateMetadata({params}) {
      const { slug } = await params;
       const project = projects.find(
    (p) => p.slug === slug
  );
  if (!project) {
    return {
      title: "Project Not Found | Khushi",
    };
  }
  return {
    title: `${project.title} | Khushi`,
    description: project.description,
  };
}

export default async function ProjectDetails({params}){
    const {slug} = await params;
    const project = projects.find((p)=>p.slug===slug);
    if(!project){
        notFound();
    }
    return(
        <section className="max-w-4xl mx-auto px-6 py-20 bg-amber-500">
             <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
             <p className="mb-6">
                {project.description}
             </p>
               <h3 className="font-semibold mb-2">Tech Stack:</h3>
               <ul className="list-disc list-inside mb-6">
                 {project.tech.map((tech)=>(
                    <li key={tech}>{tech}</li>
                 ))}
               </ul>
               <div className="flex gap-4">
                <a href={project.github} target="_blank" className="underline">
                    Github
                </a>
                {/* <a href={project.live}
          target="_blank"
          className="underline">
                    Live Demo
                </a> */}
               </div>
        </section>
    )
}