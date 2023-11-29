import React from 'react';

async function GetTeachers(id) {
  try {
    const res = await fetch(`http://localhost:4003/Teachers/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function Details({ teacher }) {
  if(!teacher){
    return <div className='text-center text-3xl text-red-700'>Loading.....</div>
  }
  return (
    <div>
   

 <table> 
 <h1>{teacher.name} Details</h1>
 <thead>{teacher.subject1}</thead>
 
 </table>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const teacher = await GetTeachers(params.id);

    return {
      props: {
        teacher,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message || 'Error fetching data',
      },
    };
  }
}

export default Details;
