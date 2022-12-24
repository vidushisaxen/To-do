import React from 'react'
import { useState,useEffect } from'react'
import axios from 'axios'

function Getapi() {
    const[state,setState]=useState([]);
    function apicall(){
        axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{setState(response.data)})
        .then((data)=>{console.log(data)});
   console.log(state);
   
    }




    useEffect(()=>{
        apicall();
    },[])
  return (
    <>
     {/* <button onClick={apicall}>call</button> */}
     {
        state.length>0?state.map((data)=>{return(
            <>
            <ul className='listcard'>
            <li className='listitem'>Id : {data.id}</li>
            <li className='listitem'> Title :{data.title}</li></ul>
            </>
        )}):<h1>loading</h1>
     }
    </>
  )
}

export default Getapi