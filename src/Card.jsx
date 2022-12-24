import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Card() {
    const[state,setState]=useState([]);
    async function apicall(){
         const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        //  console.log(response.data);
         setState(response.data);
    }




    useEffect(()=>{
        apicall();
    },[])
  return (
    <>
    <h1 className='userheading'> User information</h1>
    {
        
        state.length>0?state.map((data)=>{return(
            <div className='card'>
            <ul className='listcard'>
            <li className='listitem'>Id: {data.id}</li>
            <li className='listitem'>Name: {data.name}</li>
            <li className='listitem'>Username: {data.username}</li>
            <li className='listitem'>Email: {data.email}</li></ul>
            </div>
        )}):<h1>loading</h1>
     }
    </>
  )
}

export default Card