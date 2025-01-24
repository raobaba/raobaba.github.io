import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { NextSeo } from "next-seo";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24 ">
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-xl">FullStack Developer</span>
            <h3 className="h1">
              Hello I'm <br /> <span className="text-accent">Rajan Kumar</span>
            </h3>
            <p className="max-w-[500px] mb-9 mt-5 text-white/80 ">
              I excel at crafting elegant digital experience and I am proficient
              in various programming languages and technologies
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1BTKLp3CJppeCg9rcnZ7ubeKW6izSAfGJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl " />
                </Button>
              </a>
              <div className="mb-8 md:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base text-accent transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none mb-5 md:mb-10 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;
