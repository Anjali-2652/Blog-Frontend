import React, { useEffect, useState } from 'react'
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";




const Description = () => {

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

        <div className='px-20 py-20'>
            {
                posts.slice(0,1).map((item)=>(
                    <div>
                        <div className='my-10 font-bold text-5xl'>{item.title}</div>
                        <div><img className='h-[400px] w-full' src= {item.image}/></div>
                        <div className='mt-10 text-xl'>{item.description}</div>

                        <div className='flex items-center justify-start gap-x-10 mt-5 text-2xl'>

                       
                        <FaRegCommentAlt />
                        <div>Comment on this post</div>
                   




                        </div>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Description
