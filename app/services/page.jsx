"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description: "Developing robust web applications using HTML5, CSS3, JavaScript, ReactJS, Node.js, ExpressJS, and MongoDB. Ensuring responsive design and seamless user experiences.",
    href: "https://github.com/raobaba/Flipkart_Clone",
  },
  {
    num: "02",
    title: "Backend Development",
    description: "Building scalable backend systems with Node.js, ExpressJS, and MySQL. Implementing efficient RESTful APIs, database management, and data encryption for secure and high-performance applications.",
    href: "https://github.com/raobaba/EcommercePlus-Server",
  },
  {
    num: "03",
    title: "Frontend Development",
    description: "Creating intuitive and dynamic user interfaces using ReactJS, NextJS, Redux, and styled-components. Enhancing user interactions and frontend performance.",
    href: "https://github.com/raobaba/BiteSpeed-FrontEnd-Task",
  },
  {
    num: "04",
    title: "Database Management",
    description: "Optimizing and managing databases using MongoDB, MySQL, and Firebase. Implementing caching mechanisms and fine-tuning queries for improved system efficiency.",
    href: "",
  },
  {
    num: "05",
    title: "Real-Time Communication Solutions",
    description: "Integrating real-time communication features using Socket.io and Firebase Cloud Messaging. Enabling instant notifications and real-time data updates for enhanced user engagement.",
    href: "",
  },
  {
    num: "06",
    title: "Payment Gateway Integration",
    description: "Integrating Stripe and other payment gateways into web applications. Ensuring secure and seamless payment processing for e-commerce platforms.",
    href: "",
  },
  {
    num: "07",
    title: "Project Management and Collaboration",
    description: "Utilizing Git and GitHub for version control and team collaboration. Managing project workflows and ensuring efficient development processes.",
    href: "",
  },
  {
    num: "08",
    title: "Technical Consultation and Support",
    description: "Providing technical consultation on web development projects. Offering support and guidance on best practices, troubleshooting, and performance optimization.",
    href: "",
  },
];


import { motion } from "framer-motion";

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-12 md:py-0 ">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <a
                   target="_blank"
                    href={service.href}
                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </a>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
