import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24 ">
          <div className="text-center md:text-left">
            <span className="text-xl">Software Developer</span>
            <h3 className="h1">
              Hello I'm <br /> <span className="text-accent">Rajan Kumar</span>
            </h3>
            <p className="max-w-[500px] mb-9 mt-5 text-white/80 ">
              I excel at crafting elegant digital experience and I am proficient
              in varius programming language and technologies
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-8 md:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base text-accent hover:bg-accent hover:bg-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <Photo />
        </div>
      </div>
    </section>
  );
}

export default Home;
