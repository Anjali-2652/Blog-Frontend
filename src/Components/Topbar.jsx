import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Topbar = () => {
  return (
    <div className="p-5  fixed bg-blue-950 w-full z-10 ">
      <div className="flex  gap-x-10 justify-between">

      <div>
           
            <div
             className="text-3xl    font-bold"> Tech <span className="">Insights</span></div>
        </div>



<div>
        <form className="flex  items-center gap-x-2 bg-gray-100 rounded-3xl "> 
          <input className="h-9 pl-4 outline-none text-black  rounded-3xl bg-gray-100 opacity- w-[400px] basis-11/12 "
          type="text" placeholder="Search Here " />
          <FaSearch  className=" text-black "/>

        </form></div>
      

        <div className="flex  gap-x-10 text-xl capitalize">
            <div><a href="">home</a></div>
            <div><a href="">about</a></div>
          
            <div><a href="">blog</a></div>
            


            <Link to="/contact">
            <div>contact</div></Link>
        
            
        </div>

       

        <div  className="">

        <button className='bg-blue-500   text-xl px-5 py-1 rounded-3xl shadow-white shadow-inner tracking-wider'>Login</button>
      
        </div>

      </div>
    </div>
  );
};

export default Topbar;






