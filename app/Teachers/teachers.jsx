import Link from 'next/link'
import React from 'react'

async function TeachersList() {
  const teachers=await GetTeachers()
    if(!teachers){
        return <h1 className='text-center text-3xl font-bold text-rose-700'>No Teachers listed! Check later for updates</h1>
    }
  return (
    <div className='h-screen w-screen'>
    <Link className='btn bg-lime-800 text-slate-200' href="/Teachers/Addteachers">Add Teacher</Link>
      <table className="text-center mt-12 ml-12 h-1/2 w-1/2 bg-white border border-gray-300">
      <thead>
     <tr className="bg-gray-100 border border-gray-800">
     <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">ID</th>
      <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Name</th>
      <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Age</th>
      <th  className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Subject 1</th>
      <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Subject 2</th>
      <th  className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Nationality</th>
      </tr>
      </thead>
     
      <tbody>
      {
        teachers.map((teacher)=>(
                <tr className="bg-gray-100 border border-gray-800" key={teacher.id}>
                <td className="bg-gray-100 border border-gray-800">{teacher.id}</td>
                <td className="bg-gray-100 border border-gray-800">{teacher.name}</td>
                <td className="bg-gray-100 border border-gray-800">{teacher.age}</td>
                <td className="bg-gray-100 border border-gray-800">{teacher.subject1}</td>
                <td className="bg-gray-100 border border-gray-800">{teacher.subject2}</td>
                <td className="bg-gray-100 border border-gray-800">{teacher.Nationality}</td>
                <Link className='btn bg-blue-950 text-stone-50' href={`/Teachers/${teacher.id}`}>View Profile</Link>
                </tr>
            
            
        ))
      }
      
      
      </tbody>
      </table>
    </div>
  )
}

export default TeachersList

export async function GetTeachers() {
    try {
      const res = await fetch('http://localhost:4003/Teachers');
      const data = await res.json();
      console.log('Fetched data:', data);
      return data
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          teachers: [],
        },
      };
    }
  }
  
