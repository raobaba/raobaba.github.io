import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/raobaba" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/kumar-rajan" },
  { icon: <FaTwitter />, path: "https://twitter.com/RajanRao7061" },
];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={`${iconStyles} hover:bg-green-500 hover:text-white`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default Social;
