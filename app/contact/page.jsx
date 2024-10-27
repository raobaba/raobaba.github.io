"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+917061344366",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "raorajan9576@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Pharchhuwan, Siwan, Bihar-841239",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        "service_0e22thm",
        "template_vpag8hx",
        templateParams,
        "Sr1XPkE1GmqWp2dJN"
      )
      .then((response) => {
        toast.success("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
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
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-accent">Let's Work Together</h3>
                <p className="text-white/60">
                  I'm a Full Stack Developer with experience in building robust
                  web applications.
                </p>
                <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="FirstName"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="LastName"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <Select onValueChange={handleServiceChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="bg-black">Services</SelectLabel>
                      <SelectItem className="bg-black" value="FullStack">
                        Full Stack Development
                      </SelectItem>
                      <SelectItem className="bg-black" value="Frontend">
                        Frontend Development
                      </SelectItem>
                      <SelectItem className="bg-black" value="Backend">
                        Backend Development
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button
                  size="md"
                  className="max-w-40 text-sm py-4"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send me a message"}
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center md:justify-end order-1 md:order-none mb-8 md:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex item-center gap-6">
                    <div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Contact;
