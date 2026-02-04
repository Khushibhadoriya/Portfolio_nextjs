import Link from "next/link";
import {projects} from "@/data/projects";

export default function Project(){
    return(
        <section className="max-w-6xl mx-auto px-6 py-20 bg-orange-500">
            <h2 className="text-3xl font-bold mb-10">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project)=>(
                    <div key={project.slug} className="border border-black rounded-xl p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="mb-4">{project.description}</p>
                        <Link className="font-medium underline" href={`/projects/${project.slug}`}>View Details </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export const metadata = {
  title: "Projects | Khushi",
  description: "A collection of my full-stack and frontend projects built with modern technologies.",
};