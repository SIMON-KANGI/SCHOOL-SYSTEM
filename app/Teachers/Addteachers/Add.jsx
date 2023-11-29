'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import {useState, useEffect } from 'react'
function Add() {
  const router=useRouter()
  const [value, setValue]= useState({
    name:'',
    subject1:'',
    subject2:'',
    nationality:'',
    email:'',
    class:'',
    number:0
  })
  const [isLoading, setIsLoading]= useState(false)
  const [age, setAge]= useState(0);
  const handleChange = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  };
  

   async function handleSubmit(e){
      e.preventDefault()
      setTimeout(setIsLoading(true),5000)
  const Teacher={
  name:value.name,
    subject1: value.subject1,
    subject2: value.subject2,
    age,
    Nationality: value.nationality,
}
const res=await fetch("http://localhost:4003/Teachers",{
  method:'POST',
  headers:{"Content-Type":'application/json'},
  body:JSON.stringify(Teacher)
        })
        if(res.status===201){
        router.refresh()
          router.push('/Teachers')
        }
}
  
  return (
    <div className='text-center w-screen h-screen'>
<form onSubmit={handleSubmit} className='text-center'>
<div className='text-center flex'>
<label className='ml-4'>
Name of Teacher
<br/>
<input type="text" value={value.name} onChange={handleChange} placeholder='Name' required />
</label>
<label className='ml-4'>
Subject 1
<br/>
<input type="text" value={value.subject1} onChange={handleChange} placeholder='subject1' required />
</label>
<label className='ml-4'>
Subject 2
<br/>
<input type="text" value={value.subject2} onChange={handleChange}   placeholder='subject2' required />
</label>
<label className='ml-4'>
Age
<br/>
<input type="number" value={age} onChange={(event)=>{setAge(event.target.age)}}  placeholder='Age' required />
</label>
<label className='ml-4'>
Nationality
<br/>
<input type="text" value={value.nationality} onChange={handleChange} placeholder='Nationality' required />
</label>
</div>

<br/>
<div className='text-center flex'>
<label className='ml-4'>
Class
<br/>
<input type="text" value={value.class} onChange={handleChange} placeholder='class' required />
</label>
<label className='ml-4'>
Email
<br/>
<input type="email" value={value.email} placeholder='Email' required />
</label>
<label className='ml-4'>
Phone Number
<br/>
<input type="text" value={value.number} onChange={handleChange} placeholder='number' required />
</label>
<label className='ml-4'>
Education Level
<br/>
<select>
<option>
Highschool
</option>
<option>
Tertiary Level
</option>
<option>
Post Graduate
</option>
<option>
Masters
</option>
<option>
PHD
</option>
</select>
</label>
</div>
<br/>
<button disabled={isLoading} onClick={handleSubmit} className='btn bg-black text-white'>
{isLoading&& <span>Saving...</span>}
{!isLoading && <span>Save</span>}
</button>
</form>
    </div>
  )
}

export default Add
