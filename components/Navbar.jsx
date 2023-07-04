"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full h-20 bg-slate-200 shadow-md flex items-center">
      <nav className="wrapper flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-2xl font-semibold uppercase sm:text-xl">
            Md Rafiul Islam
          </Link>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-5">
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
        </div>

          <button className=" border-2 border-sky-500 cursor-pointer  px-5 py-3 rounded-md text-md capitalize hover:bg-sky-500  shadow-sm hover:border-2 hover:shadow-sky-500 duration-500 hidden md:block">View Resume</button>
      

        {/* toogle button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="text-3xl  z-[99]"
          >
            {toggle ? <AiOutlineClose /> : <FiMenu />}
          </button>
        </div>
      </nav>

{/* mobile navbar */}
        {toggle ? (
          <div className="md:hidden">
            <div
              onClick={() => setToggle((prev) => !prev)}
              className={`w-screen h-screen fixed z-[98]  top-0 bg-slate-200 left-0 right-0 bottom-0 flex justify-center items-center ${
                setToggle ? `` : "hidden"
              }`}
            >
              <div className="space-y-5">
                <ul className="flex gap-5 flex-col items-start">
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
                <Link href=""className="inline-block" >View Resume</Link>
              </div>
             
            </div>
          </div>
        ) : null}
     
    </header>
  );
};

export default Navbar;
