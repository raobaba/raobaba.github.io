"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGit, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiPostman, SiBootstrap, SiSocketdotio, SiStripe, SiNpm } from 'react-icons/si';


const about = {
  title: "About Me",
  description:
    "I am a passionate Full Stack Developer with over 2 years of experience in building and optimizing web applications. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences. My expertise spans across various programming languages and frameworks, and I am dedicated to continuous learning and exploring new technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rajan Kumar",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7061344366",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "raorajan9576@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi",
    },
  ],
};


const experience = {
  icon: "./assets/resume/badge.svg",
  title: "My Experience",
  description:
    "With a solid background in Full Stack Development, I have successfully delivered multiple projects, focusing on creating efficient and scalable web applications. My roles have involved both frontend and backend development, ensuring end-to-end solutions for various clients.",
  items: [
    {
      company: "Margmaker Solution Pvt. Ltd.",
      position: "Full Stack Developer",
      duration: "Mar 2024 - Present",
    },
    {
      company: "Eduuis Techo Solution Pvt. Ltd.",
      position: "Full Stack Developer",
      duration: "Mar 2023 - Feb 2024",
    },
  ],
};


const education = {
  icon: "./assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have a strong educational background in both full stack web development and mathematics, which has equipped me with a comprehensive understanding of problem-solving and analytical skills. My formal education, combined with hands-on experience, has prepared me to tackle complex challenges in the tech industry.",
  items: [
    {
      Institution: "Masai School",
      degree: "Full Stack Web Development Bootcamp",
      duration: "Mar 2022 - Dec 2022",
    },
    {
      Institution: "Magadh University",
      degree: "Bachelor of Science in Mathematics",
      duration: "Jun 2016 - Aug 2019",
    },
  ],
};


const skills = {
  title: "My Skills",
  description:
    "I possess a diverse skill set in web development, proficient in both frontend and backend technologies. My expertise includes creating dynamic user interfaces, building robust backend systems, and managing databases efficiently.",
  skillset: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNode />,
      name: "Node.js",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiNpm />,
      name: "NPM",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap 4",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiSocketdotio />,
      name: "Socket.io",
    },
    {
      icon: <SiStripe />,
      name: "Stripe Payment Integration",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 md:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col md:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6 md:mx-0 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skill</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 md:m-0 ">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent  ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 md:m-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent  ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left ">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 md:m-0 ">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.skillset.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left "
            >
              <div className="flex flex-col gap-[30px] text-center md:text-left ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                 <p className="max-w-[600px] text-white/60 md:m-0 ">
                  {about.description}
                </p>
                <ul>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
