import Link from "next/link"

export default function Hero(){
    return (
       <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
             Hi, I’m <span className="text-amber-600">Khushi Bhadoriya</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        A passionate Software Developer building scalable web applications
        using React, Next.js, and modern backend technologies.
      </p>

      <div className="flex gap-4">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/contactkhushibhadoriya/" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:scale-90 hover:opacity-80 transition-transform">
          Visit Linkedin
        </a>
        {/* <Link href="/contactF"> */}
        <a target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:scale-90 hover:opacity-80 transition-transform" href="https://github.com/Khushibhadoriya">
          Visit Github
        </a>
        {/* </Link> */}
        <a href="/resume.pdf" download>
                    <button className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:scale-90 hover:opacity-80  transition-transform">Download Resume</button>
                 </a>
      </div>
       </section>
    );
}