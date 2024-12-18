import React from 'react'


import Cardflex from './Cardflex'

const RecentPosts = () => {
  return (
    <div className='mt-[150px] mb-10 ml-5 mr-10 '>

      <div className='text-4xl font-bold '>Recent Articles</div>
      <div className='flex justify-between mt-8 '>
        <p className='text-xl text-gray-600'>Stay updated with the latest tech trend</p>
        <button className='bg-white mt-5  text-blue-700 text-xl px-5 py-3 rounded-3xl shadow-black shadow-inner tracking-wider'>View All</button>
      </div>


      <div className='flex '>
      <Cardflex/>
      {/* <Cardflex/> */}
      </div>
{/* 
      <div className='flex'>
      <Cardflex/>
      <Cardflex/>
      </div> */}
    

      
     



      
    </div>
  )
}

export default RecentPosts
