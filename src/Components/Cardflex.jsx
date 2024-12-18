import React, { useEffect, useState } from "react";
import Description from "./Description";
import { Link } from "react-router-dom";


const Cardflex = () => {
  
  const[posts, setPosts] = useState([]);

const recentPosts = async()=>{
  const data = await fetch('http://127.0.0.1:8000/api/blog/')
  const jsonData = await data.json()
  setPosts(jsonData)
  console.log(jsonData)
}

useEffect(() =>{
  recentPosts()
},[])



  return (
    <div>
      <div className="container mx-auto px-4 py-8 ">
        <div className=" grid grid-cols-2 ">
         {posts.map((data)=>(
           <div className="bg-white flex gap-x-5 overflow-hidden">
           <img
             src={data.image}
             alt="Workplace Trends"
             className=" h-[350px] w-[350px] object-cover hover:scale-110 transition-transform ease-in-out transform 
        duration-500"
           />
           
           <div className="p-4">
             <p className="text-blue-500 text-sm font-medium">
               {data.category}
             </p>
             <h2 className="text-2xl font-bold mt-1">
            {data.title}
             </h2>
             <p className="text-gray-600 mt-2">
              {data.about}
             </p>
             <Link to = "/description">
             <button className="bg-blue-500 mt-5  text-xl px-5 py-3 rounded-3xl shadow-black shadow-inner tracking-wider">
               Read More
             </button>
             </Link>
           </div>
         </div>
         ))

         }
        </div>
      </div>


    </div>
  );
};

export default Cardflex;

{
  /* <div className='overflow-hidden h-[300px] w-[900px]'>
        <img className='hover:scale-110 transition-transform object-cover ease-in-out transform
         duration-500 w-full h-full'
                 src="https://img.freepik.com/free-photo/tablet-which-you-can-read-blog_1134-226.jpg?t=st=1734309519~exp=1734313119~hmac=76ffb66013d1f2ca347e9f30b0470cde9a41d63b18698ccc024ae53f6c974560&w=826" alt="" /></div> */
}
