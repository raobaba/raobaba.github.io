"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "NextHire",
    description:
      "NextHire is a job portal that enables users to post jobs, apply for positions, and receive email notifications regarding application status and many more...",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Nodemailer" },
      { name: "Redux" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "ReactJS" },
      { name: "ExpressJS" },
      { name: "Redux-Thunk" },
      { name: "Tailwind CSS" },
      { name: "GEN AI" },
    ],
    image: "/./assets/work/nexthire.png",
    live: "https://nexthire-portal.netlify.app/",
    github: "https://github.com/raobaba/Next_Hire_Job_Portal",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Flipkart",
    description:
      "Flipkart has a dominant position in the apparel segment, bolstered by its acquisition of Myntra, and was described as being 'neck and neck' with Amazon in the sale of electronics and mobile phones",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Bootstrap" },
      { name: "Redux" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "ReactJS" },
      { name: "ExpressJS" },
      { name: "Redux-Thunk" },
      { name: "Tailwind CSS" },
    ],
    image: "/./assets/work/flipkart.png",
    live: "https://flip-ecom-website.netlify.app/",
    github: "https://github.com/raobaba/Flipkart_Clone",
  },
  {
    num: "03",
    category: "FullStack",
    title: "SkinStore",
    description:
      "SkinStore is an authorized retailer to 100s of premium beauty brands across skin, makeup and hair including SkinCeuticals, Dermalogica, Caudalie, Alternative and many othr product related skin. It's a US based company...",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
    ],
    image: "/./assets/work/SkinStore.png",
    live: "https://skinstore-website.netlify.app/",
    github: "https://github.com/raobaba/Clone-SkinStore",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Myntra",
    description:
      "Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, and this is our 2 collaborative project in masai school",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
    ],
    image: "/./assets/work/Myntra.png",
    live: "https://darling-tartufo-bbf819.netlify.app/",
    github: "https://github.com/raobaba/Myntra-Clone",
  },
  {
    num: "05",
    category: "FullStack",
    title: "YOOM",
    description:
      "Developed a Zoom-like application allowing users to initiate video calls, view and schedule meetings, access past recordings, and invite others via links for seamless collaboration.",
    stack: [
      { name: "Nextjs14" },
      { name: "Stream" },
      { name: "Clerk Auth" },
      { name: "Typescript" },
      { name: "Tailwind css" },
    ],
    image: "/./assets/work/YOOM.png",
    live: "https://video-call-flame-six.vercel.app/",
    github: "https://github.com/raobaba/video-conference",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Dashboard",
    description:
      "About This dashboard application features diverse ecommerce charts (pie, bar, line, financial, pyramid) with color mapping, alongside tools like a color picker, Kanban board, editor, calendar, and displays comprehensive data for orders, employees, and customers.",
    stack: [
      { name: "Nextjs14" },
      { name: "Stream" },
      { name: "Clerk Auth" },
      { name: "Typescript" },
      { name: "Tailwind css" },
    ],
    image: "/./assets/work/dashboard.png",
    live: "https://dashboard-coral-tau.vercel.app/",
    github: "https://github.com/raobaba/dashboard",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] justify-center py-1 md:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:gap-[30px]">
          <div className="w-full md:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all capitalize duration-500 ">
                {project.title} 
              </h2>
              <h4 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all capitalize duration-500 ">
                {project.category} Project
              </h4>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4 h-auto">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-xl text-accent whitespace-nowrap"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 w-11/12"></div>
              <div className="flex items-center gap-4 ">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white rounded-xl">
                        <p className="bg-white text-primary text-semibold ">
                          Live Project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white rounded-xl">
                        <p className="bg-white text-primary text-semibold ">
                          Github Repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-[470px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[400px] relative group flex justify-center items-center bg-pink-50/20 :">
                    <div></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 right-0 absolute bottom-[calc(60%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[30px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
