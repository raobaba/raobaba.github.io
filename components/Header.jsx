import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
function Header() {
  return (
    <header className="py-8 xl:py-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Rajan<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
}

export default Header;
