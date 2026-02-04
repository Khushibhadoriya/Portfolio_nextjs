"use client"
import { use, useState } from "react" ;

export default function ContactForm(){
    const[form, setForm] = useState({
        name:"",
        email:"",
        message:""
    });

    const[status,setStatus]=useState("");

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending....");

        const res = await fetch("/api/contact",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        if(res.ok){
            setStatus("Message sent successfully ✅");
            setForm({ name: "", email: "", message: "" });
        }else{
            setStatus(data.error || "Something went wrong ❌");
        }
    }
    
    return(
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
          <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
           className="border border-black p-3 rounded"
          />
          <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="border border-black p-3 rounded"
      />
       <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="border border-black p-3 rounded"
      />
      <button className="bg-amber-600 text-white py-3 rounded hover:opacity-90 transition">
        Send Message
      </button>
       {status && <p>{status}</p>}
        </form>
    )
}
