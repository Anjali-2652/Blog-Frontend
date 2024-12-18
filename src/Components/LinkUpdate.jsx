import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const LinkUpdate = () => {
  return (
    <div className="bg-white pt-20 pb-20">
      <div className="text-5xl text-center text-gray-900 capitalize font-bold">
        stay updated with Tech Insights
      </div>
      <div className="flex justify-center gap-x-5 mt-10">
        <FaFacebookSquare className="rounded-full text-5xl" />
        <FaLinkedin className="rounded-full text-5xl" />
        <FaTwitterSquare className="rounded-full text-5xl" />
        <FaGithubSquare className="rounded-full text-5xl" />
      </div>
    </div>
  );
};

export default LinkUpdate;
