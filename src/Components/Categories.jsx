import React from "react";
import Card from "./Cardflex";

import { BiSolidCategory } from "react-icons/bi";

const Categories = () => {
  return (
    <div className="mb-10  mt-20 ml-5">
      <div>
        <div className="text-5xl font-bold text-center border-b-2 pb-5 border-gray-600">
          Explore our categories
        </div>
        <ul className="capitalize py-2 justify-center ml-5 mt-10 text-gray-800 text-2xl gap-x-10 ">
          <li className="cursor-pointer hover:text-2xl flex gap-x-4 transition-all duration-200">
            <div>
              <BiSolidCategory />
            </div>
            <div>All</div>
          </li>
          <li className="cursor-pointer hover:text-2xl flex gap-x-4 transition-all duration-200">
            <div>
              <BiSolidCategory />
            </div>
            <div>Technology</div>
          </li>
          <li className="cursor-pointer hover:text-2xl flex gap-x-4 transition-all duration-200">
            <div>
              <BiSolidCategory />
            </div>
            <div>Education</div>
          </li>
          <li className="cursor-pointer hover:text-2xl flex gap-x-4 transition-all duration-200">
            <div>
              <BiSolidCategory />
            </div>
            <div>Health & Fitness</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
