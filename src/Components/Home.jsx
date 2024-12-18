import React from 'react'
import Topbar from './Topbar'
import {Link, Outlet } from 'react-router-dom'
import Categories from './Categories'
import RecentPosts from './RecentPosts'
import Highlighted from './Highlighted'
import LinkUpdate from './LinkUpdate'
import Footer from './Footer'
import Contact from './Contact'



const Home = () => {
  return (
    <div className=' font-roboto '>
     

      <div className=' relative h-dvh '><img className='w-full'
       src="https://img.freepik.com/premium-photo/woman-using-laptop-with-social-media-icons-surrounding-her_1212719-3563.jpg?w=900" alt="" />
       <div className='absolute top-0 text-white'>
        <div><Topbar/></div>
        <div className='text-center flex items-center justify-center mt-[200px]'>
          <div>
          <p className='text-5xl font-bold'>Welcome to Tech Insights</p>
          <p className='text-wrap mt-5 text-2xl mx-[200px]'>Dive into the world of technology with our latest insights on trends, innovations and gadgets. stay informed and inspired with our expert analyses and engaging content.</p>

<Link to='/recent'>
          <button className='bg-blue-500 mt-5  text-xl px-5 py-3 rounded-3xl shadow-white shadow-inner tracking-wider'>Explore Topics</button></Link>

        </div></div>
       </div>
       
       </div>



<RecentPosts/>
<Categories/>
<Highlighted/>

<LinkUpdate/>
<Footer/>
<Outlet/>

    </div>
  )
}

export default Home
