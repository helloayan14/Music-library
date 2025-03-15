
"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
    <div> <Link className="text-black dark:text-white " href="/">Home</Link></div>
        <MenuItem setActive={setActive} active={active} item="Our courses" >
          <div className="  text-sm grid grid-cols-2 gap-10 p-4 ">
            <ProductItem
              title="All Courses"
              href="/courses"
              src="/all.svg"
              description="Check for all our courses."
            />
            <ProductItem
              title="Basic Music Theory"
            href="/courses"
              src="/basic.svg"
              description="Get started you with our basic music theory course."
            />
            <ProductItem
              title="Advanced Composition"
              href="/courses"
              src="/advanced.svg"
              description="Be a pro composer with our advanced composition course."
            />
            <ProductItem
              title="Song Writing"
              href="/courses"
              src="/songwriting.svg"
              description="Have some fun with our song writing course."
            />
            
          </div>
        </MenuItem>
        <div> <Link className="text-black dark:text-white " href="/">Contact Us</Link></div>
      </Menu>
    </div>
  );
}
