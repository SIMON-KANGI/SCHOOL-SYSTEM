'use client'
import React, { useEffect, useState } from 'react'

function AddTeacher() {
    const [name, setName]=useState('')
    const [id, setId]= useState()
  return (
    <div>
      <form>
      <label>
      Name of teacher
      <input required type="text" value={name}/>
      </label>
      <label>
      Contact
      <input required type="number" value={id}/>
      </label>
      <label>
      Subject 1
   <select>
   <option>
   English
   </option>
   <option>
   Kiswahili
   </option>
   <option>
Maths
   </option>
   <option>
   Chemistry
   </option>
   <option>
   Physics
   </option>
   <option>
   History
   </option>
   <option>
   Geography
   </option>
   <option>
   Home science
   </option>
   <option>
   Computer
   </option>
   </select>
      </label>
      <label>
      Subject 2
   <select>
   <option>
   English
   </option>
   <option>
   Kiswahili
   </option>
   <option>
Maths
   </option>
   <option>
   Chemistry
   </option>
   <option>
   Physics
   </option>
   <option>
   History
   </option>
   <option>
   Geography
   </option>
   <option>
   Home science
   </option>
   <option>
   Computer
   </option>
   </select>
      </label>
      </form>
    </div>
  )
}

export default AddTeacher
