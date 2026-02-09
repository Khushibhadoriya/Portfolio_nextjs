"use client"
import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="fixed top-0 w-full bg-amber-500 border-b border-black z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
                <h1 className="font-bold text-xl"> Khushi's Portfolio </h1>
                 {/* <h6 className="text-sm opacity-85">A Software Developer</h6> */}
                
                    
            </div>
               
               
                <ul className="flex gap-6 font-medium">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                     <li>
                        <Link href="/about">About</Link>
                    </li>
                     <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                     <li>
                        <Link href="/contactF">Contact</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}