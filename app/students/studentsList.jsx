'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Modal, ModalContent, ModalBody, ModalOverlay, ModalCloseButton, useDisclosure } from '@chakra-ui/react'


function StudentsList() {
   useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetch('http://localhost:4004/Students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getStudents();
  }, []);
    const {onOpen, onClose, isOpen}= useDisclosure()
    const [students, setStudents]= useState([])
   {/*useEffect(() => {
        const getStudents = async () => {
          try {
            const response = await fetch('http://localhost:4004/Students');
            const data = await response.json();
            setStudents(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        getStudents();
        }, [])*/}
     useEffect(()=>{
const DeleteStudent=async ()=>{
  try{
    const res=await fetch(`http://localhost:4004/Students${id}`,{
method:'DELETE'
    })
    const data=await res.json()
    setStudents(data)
  const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    
}catch (error) {
  console.error('Error fetching data:', error);
}}
  
DeleteStudent();
}, []);
    if(students.length===0){
        return <h1 className='text-center text-3xl font-bold text-rose-700'>No Students listed! Check later for updates</h1>
    }
  return (
    <div className='w-screen'>
    <table className="text-center mt-12 ml-12 h-1/2 w-1/2 bg-white border border-gray-300">
    <thead>
    <tr>
    <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">ID</th>
    <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Name</th>
    <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Class</th>
    <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Age</th>
    <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Nationality</th>
    <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Date joined</th>
    <th className=" text-lime-500 text-2xl font-bold bg-gray-100 border border-gray-800">Status</th>
    </tr>
    </thead>
    <tbody>
    {
        students.map((student)=>(
          <tr className="bg-gray-100 border border-gray-800" key={student.id}>
                <td className="bg-gray-100 border border-gray-800">{student.id}</td>
                <td className="bg-gray-100 border border-gray-800">{student.name}</td>
                <td className="bg-gray-100 border border-gray-800">{student.class}</td>
                <td className="bg-gray-100 border border-gray-800">{student.age}</td>
                <td className="bg-gray-100 border border-gray-800">{student.Nationality}</td>
                <td className="bg-gray-100 border border-gray-800">{student.date}</td>
                <td><Link className='btn' href={`/students/${student.id}`}>View</Link></td>
                <td><button onClick={onOpen} className='btn text-slate-200 bg-red-900'>Delete</button></td>
           <Modal isOpen={isOpen} onClose={onClose} isCentered>
        
           <ModalContent>
           <ModalCloseButton onClose={onClose}/>
           <ModalBody>
           <h1 className='text-slate-800 text-xl'>Are you sure you want to delete this content?</h1>
           <button  onClick={()=>DeleteStudent(student.id)} className='btn bg-red-600 text-slate-300'>Delete</button>
           </ModalBody>
           </ModalContent>
           </Modal>
              </tr>
            )
                
        )
      }
      </tbody>
    
    </table>
      
    </div>
  )
}

export default StudentsList

