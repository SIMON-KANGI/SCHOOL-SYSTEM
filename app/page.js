
import Image from 'next/image';
import {AiOutlineArrowRight} from 'react-icons/ai'
import image2 from '../assets/2.jpg'

async function getAnnouncements(){
const res=await fetch("http://localhost:4000/announce")
const data= await res.json();
if(!data){
  return <h1 className="text-center">No announcements at this moment</h1>
}
return data;
}

export default async function Home() {
  const Announce=await getAnnouncements()
  return (
  <main>
  <h1 className="text-center text-4xl ml-10 text-cyan-600 font-bold">Sonku school</h1>
  <h3 className="text-center text-3xl text-gray-900 font-bold">Welcome</h3>
  <h3 className="text-center text-2xl text-gray-900 font-bold">William Ruto</h3>
  <div className="grid">
  <div className="card ml-4 w-full h-full">
  <Image src={image2} ml-2 alt=""/>
  </div>
  <div>
  <h1 className="text-center text-3xl font-bold">ANNOUNCEMENTS</h1>
  {
    Announce.map((announce)=>{
      return(
        <div key={announce.id}> 
        <p className="flex text-xl text-red-400 font-bold"><AiOutlineArrowRight/> {announce.description}</p>
        </div>
      )
    })
  }
 
  </div>
  <div>
  <h1 className="text-center text-4xl font-bold">EVENTS</h1>
  <p className="text-center font-bold text-xl text-cyan-400">NO POSTED EVENTS AT THIS TIME!!</p>
  </div>

  </div>
  </main>
  )
}
