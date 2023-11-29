'use client'
import React from 'react'
import Image from 'next/image'
import image1 from '/assets/3.jpeg'
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'
import {BiSolidDashboard} from 'react-icons/bi'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {PiStudentDuotone} from 'react-icons/pi'
import {ImBookmarks} from 'react-icons/im'
import {MdAnnouncement} from 'react-icons/md'
import { useState } from 'react'
import Link from 'next/link'
function Nav() {
    const [display, setDisplay]= useState(true)

    function showNav(){
        setDisplay(!display)
    }
    const Items=[
        {
            name:"Home",
            path:"/",
            icon:AiOutlineHome
        },
        {
            name:"Dashboard",
            path:"/dashboard",
            icon:BiSolidDashboard
        },
        {
            name:"Teachers",
            path:"/Teachers",
            icon:FaChalkboardTeacher
        },
        {
            name:"Students",
            path:"/students",
            icon:PiStudentDuotone
        },
        {
            name:"Results",
            path:"/results",
            icon:ImBookmarks
        },
        {
            name:"Announcements",
            path:"/announcements",
            icon:MdAnnouncement
        },
    ]
  return (
    <>
    <div className='block md:hidden ml-4 mt-4 text-2xl font-bold'> <AiOutlineMenu onClick={showNav}/></div>
   {display &&(
    <div className='md:block  bg-slate-400 border-x-2 h-screen'>
    <br/>
    <h3 className='text-2xl text-lime-950 font-bold ml-4'>SONKU HIGH</h3>
    <Image src={image1} className='rounded-full overflow-hidden ml-4' alt="ceo" width={100} height={100}/>
    <h3 className='text-2xl text-slate-100 font-bold ml-3'>William Ruto</h3>
    <h2 className='text-xl text-lime-950 font-bold ml-4'>Principle</h2>
    <br/>
    <br/>
    <br/>
    
    <div> {
        Items.map((item, name)=>{
            return(
            
                <nav className='ml-2 mt-6 ' key={item.name}>
                <ul>
                <li className='text-2xl '>
                
                <Link className='flex mt-8' href={item.path}>
                <div>{React.createElement(item.icon)}</div>
                {item.name}</Link></li>
                </ul>
                </nav>
                
                ) 
            
        })
      }
      </div>
     <br/>
      <div>
      
      <h3 className='text-2xl font-bold mt-8 ml-3'>MOTTO</h3>
      <p>Work smart, not hard<br/> life is already hard !!</p>
      </div>
    </div>)}
    
    </>
    
  )
}

export default Nav
 