import Image from "next/image";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
   <main>
    <Hero/>
    <section id="contact" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <ContactForm />
      </section>
   </main>
  );
}
