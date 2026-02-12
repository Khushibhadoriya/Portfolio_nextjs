import { Span } from "next/dist/trace";
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-30 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src="/profile.jpeg"
            alt="Khushi Bhadoriya"
            width={280}
            height={280}
            className="rounded-full border-4 border-gray-300 shadow-lg"
            priority
          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I am a final-year engineering student and aspiring software engineer
            with strong interest in  full-stack systems,
            and modern web technologies. I enjoy building scalable and
            production-ready web applications using Next.js and React.
          </p>
        </div>

      </div>
    </section>
  );
}