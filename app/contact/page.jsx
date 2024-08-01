"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+917061344366",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youreamil@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Pharchhuwan,Siwan,Bihar-841239",
  },
];

import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 md:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, quis.
              </p>
              <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="FirstName" />
                <Input type="lastname" placeholder="LastName" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Select>
                 <SelectTrigger className="w-full">
                    <SelectValue>Select a Service</SelectValue>
                 </SelectTrigger>
                 <SelectContent>
                    <SelectGroup>
                       <SelectLabel className="bg-black">Select a Service</SelectLabel>
                       <SelectItem className="bg-black" value="est">Web Development</SelectItem>
                       <SelectItem className="bg-black" value="mst">Web Development</SelectItem>
                       <SelectItem className="bg-black" value="cst">Web Development</SelectItem>
                    </SelectGroup>
                 </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message here."/>   
              <Button size="md" className="max-w-40 py-4" >Send me message</Button>           
            </form>
          </div>
          <div className="flex-1 flex items-center md:justify-end order-1 md:order-none mb-8 md:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return <li key={index} className="flex item-center gap-6">
                    <div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                     <div className="text-[28px]"> {item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
