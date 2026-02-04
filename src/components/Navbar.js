"use client"
import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="fixed top-0 w-full bg-amber-300 border-b border-black z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="font-bold text-xl">Khushi.dev</h1>
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
                        <Link href="#contact">Contact</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}