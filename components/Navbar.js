import React from "react";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="w-full h-20 bg-slate-200 shadow-md flex items-center">
      <nav className="container mx-auto py-3 flex justify-between items-center">
        <Link href="/" className="text-3xl">Md Rafiul Islam</Link>
        <ul className="nav-links flex gap-5 text-xl">
        <li>
            <Link href="/projects"> Projects</Link>
        </li>
        <li>
        <Link href="/skills"> Skills</Link>
        </li>
          <li>
          <Link href="/about"> About</Link>
          </li>
         <li>
         <Link href="/contact">Contact</Link>
         </li>
        </ul>
       <Button text={"View Resume"}/>
      </nav>
    </header>
  );
};

export default Navbar;
