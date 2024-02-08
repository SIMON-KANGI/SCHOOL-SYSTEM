
import React from 'react'

async function Details(id){
    try{
        const res= await fetch(`http://localhost:3000/Students/${id}`,{
            next:{
                revalidate:60
            }
        })
        const data=await res.json()
        return data
        
            }catch(error){
                return('Error fetching data:', error)
            }
        
    
    
}
console.log(Details())
async function StudentDetails({params}) {
    const student= await Details(params.id)

if(!student){
    return(
        <h1 className='text-red-800 font-bold text-4xl'>No details...</h1>
    )
}
  return (
    <div>
    <table>
    <thead>
    <tr>
    <th>Name</th>
    <th>Nationality</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>{student.name}</td>
    <td>{student.Nationality}</td>
    </tr>
    </tbody>
    </table>
   
    </div>
  )
}

export default StudentDetails
