import React, { useEffect, useState } from "react";
import Description from "./Description";
import { Link, useNavigate } from "react-router-dom";

const CardBlock = () => {

  const navigate = useNavigate()

  const[posts, setPosts] = useState([]);
  // const [activeComponent, setActiveComponent] = useState(null);

  // const showDescription = () => setActiveComponent(<Description />);

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

    <div className=" py-8">
   
    <div className="grid grid-cols-3 ">
    {
      posts.slice(0,3).map((data)=>(
        <div className=" overflow-hidden">
        <img
          src={data.image}
          alt="Workplace Trends"
          className=" h-[300px] w-[400px] rounded-t-2xl hover:rounded-t-2xl object-cover hover:scale-110 transition-transform ease-in-out transform
duration-500"
        />
        <div className="p-4 mt-5">
          <p className=" text-sm font-medium tracking-wider">{data.category}</p>
          <h2 className="text-2xl font-bold mt-1">
            {posts.title}
          </h2>
          <p className="text-gray-600 mt-2">
            {data.about}
          </p>

          <Link to = "/description">
          <button onClick={()=>{handleClick(data.id)}}
           className='bg-blue-500 mt-5  text-xl px-5 py-3 rounded-3xl shadow-white shadow-inner tracking-wider'>Read More</button>
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

export default CardBlock;
