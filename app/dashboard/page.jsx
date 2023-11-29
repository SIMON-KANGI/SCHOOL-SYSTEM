import React from 'react'
import Image from 'next/image'
import image1 from '/assets/4.jpg'
import image2 from '/assets/5.jpg'
import image3 from '/assets/6.png'
import image4 from '/assets/7.jpg'
import image5 from '/assets/8.png'
import image6 from '/assets/9.jpg'
import image7 from '/assets/10.jpg'
import Link from 'next/link'
function Dashboard() {
  return (
    <main>
    <h1 className="text-center text-4xl ml-10 text-cyan-600 font-bold">Sonku school</h1>
    <h3 className="text-center text-3xl text-gray-900 font-bold">Welcome</h3>
    <h3 className="text-center text-2xl text-gray-900 font-bold">William Ruto</h3>
    <div className='md:flex'>
    
    <div id="dash-items" className='card  justify-self-center rounded-2xl overflow-hidden ml-8 bg-slate-800 md:w-1/2 h-1/2'>
    <h1 className='text-3xl text-slate-100 font-bold'>TEACHERS</h1>
    <Link href="/Teachers"><Image src={image1} width={500} height={500} alt="teacher in class"/></Link>
    <p className='text-2xl font-semibold text-slate-100'>Number of teacher and their repspective classes</p>
    </div>
  <br/>
    <div className='card justify-self-center rounded-2xl overflow-hidden ml-8 bg-black md:w-1/2 h-1/2'>
    <h1 className='text-3xl text-slate-100 font-bold '>Students</h1>
    <Link href="/students"><Image src={image2} width={500} height={500} alt="teacher in class"/></Link>
    <p className='text-2xl font-semibold text-slate-100 '>Sudents Admission number and personal reports</p>
    </div>
  
   <br/>
    
     <div className='card justify-self-center rounded-2xl overflow-hidden ml-8 bg-black md:w-1/2 h-1/2'>
    <h1 className='text-3xl text-slate-100 font-bold '>Results</h1>
   <Link href="/results"><Image src={image3} width={500} height={500} alt="teacher in class"/></Link> 
    <p className='text-2xl font-semibold text-slate-100 '>Sudents results per class and overall mean grades</p>
    </div>
    <br/>
   <div className='card justify-self-center rounded-2xl overflow-hidden ml-8 bg-black md:w-1/2 h-1/2'>
    <h1 className='text-3xl text-slate-100 font-bold '>Announcements</h1>
   <Link href="/announcements"><Image src={image4} width={500} height={500} alt="teacher in class"/></Link> 
    <p className='text-2xl font-semibold text-slate-100 '>View recent announcements</p>
    </div>
    
    </div>
  <br/>
  <div className='md:flex'>
    
  <div className='card justify-self-center rounded-2xl overflow-hidden ml-8 bg-slate-800 md:w-1/2 h-1/2'>
  <h1 className='text-3xl text-slate-100 font-bold'>TIMETABLE</h1>
  <Link href="/teachers"><Image src={image5} width={500} height={500} alt="teacher in class"/></Link>
  <p className='text-2xl font-semibold text-slate-100'>All class Timetables.</p>
  </div>
<br/>
  <div className='card justify-self-center rounded-2xl overflow-hidden ml-8 bg-black md:w-1/2 h-1/2'>
  <h1 className='text-3xl text-slate-100 font-bold '>COURSES</h1>
  <Link href="/students"><Image src={image6} width={500} height={500} alt="teacher in class"/></Link>
  <p className='text-2xl font-semibold text-slate-100 '>View Courses</p>
  </div>
<br/>
 
  
   <div className='card justify-self-center rounded-2xl overflow-hidden ml-8 bg-black md:w-1/2 h-1/2'>
  <h1 className='text-3xl text-slate-100 font-bold '>UPCOMING PROJECTS</h1>
 <Link href="/results"><Image src={image7} width={500} height={500} alt="teacher in class"/></Link> 
  <p className='text-2xl font-semibold text-slate-100 '>Sudents results per class and overall mean grades</p>
  </div>
  <br/>
 <div className='card justify-self-center rounded-2xl overflow-hidden ml-8 bg-black md:w-1/2 h-1/2'>
  <h1 className='text-3xl text-slate-100 font-bold '>Announcements</h1>
 <Link href="/announcements"><Image src={image4} width={500} height={500} alt="teacher in class"/></Link> 
  <p className='text-2xl font-semibold text-slate-100 '>View recent announcements</p>
  </div>
  
  </div>
    </main>
  )
}

export default Dashboard
