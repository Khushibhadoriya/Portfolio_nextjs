import Link from "next/link"

export default function Hero(){
    return (
       <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
             Hi, I’m <span className="text-amber-600">Khushi</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        A passionate Software Engineer building scalable web applications
        using React, Next.js, and modern backend technologies.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition">
          View Projects
        </button>
        <Link href="#contact">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition">
          Contact Me
        </button>
        </Link>
      </div>
       </section>
    );
}