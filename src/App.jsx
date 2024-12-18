import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './Components/Topbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Categories from './Components/Categories'
import RecentPosts from './Components/RecentPosts'
import Description from './Components/Description'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/categories' element = {<Categories/>}/>
      <Route path='/recent' element = {<RecentPosts/>}/>
      <Route path='/description' element = {<Description/>}/>



      <Route path='/contact' element = {<Contact/>}/>

      ,
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
