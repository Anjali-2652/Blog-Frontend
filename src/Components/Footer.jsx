import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black px-5 py-20 text-white relative ">
      <div className="flex justify-between border-b-2 pb-8 fixed">
        <div className="text-2xl tracking-wider text-gray-300">
          Tech Insights{" "}
        </div>
        <div className="flex gap-x-10">
          <div>About Us</div>
          <div>Categories</div>
          <div>Contact</div>
        </div>
        <div className="flex gap-x-5">
          <FaLinkedin className="rounded-full text-2xl" />
          <FaTwitterSquare className="rounded-full text-2xl" />
          <FaGithubSquare className="rounded-full text-2xl" />
        </div>
      </div>

      <div className="flex justify-center gap-x-20 mt-10">
        <div className="flex items-center gap-x-1">
          <div >
            <AiOutlineCopyrightCircle />
          </div>
          <div>2024</div>
          <div>Tech Insights</div>
          <div>All Rights Reserved.</div>
        </div>
        <div>Terms & Condition</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
