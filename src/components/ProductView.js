import React, { useEffect, useState } from 'react'
import api from './api';
import './pview.css'
// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const ProductView = () => {
    const {pid}=useParams();
    // console.log(pid);
    const [data,setData]=useState({});
    // console.log(data);

    
    const addincart=async (e)=>{
        e.preventDefault();
        const res=await fetch('/addtocart',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({pid})
        });
        const data=await res.json();
        if(!data){
          console.log("message not send");
        }else{
          alert("Data added to cart successfuly");
        //   setUserData({...userData,message:""});
        }
      }
   
useEffect(()=>{
   const apidata=api.find((e)=>{
      return e.pid==pid;
    })
    setData(apidata);
},[])
  return (
    <>
      <div className="pvcontainer">
        <img src={data.src? data.src : 'https://images.pexels.com/photos/17440873/pexels-photo-17440873/free-photo-of-portrait-of-blonde.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} alt="image" />
        <div className="pvdetails">
          <h1>{data.pname}</h1>
          <h3>{data.ptitle}</h3>
          <p><span>Product Color &emsp; &emsp;</span>{data.pcolor}</p>
          <p><span>Ratings </span>&nbsp;&emsp; &emsp;&nbsp;&emsp; &emsp;&emsp;⭐⭐⭐⭐⭐ </p>
          <p><span>Product Fiber &nbsp;&emsp; &emsp;</span>{data.fiber}</p>
          <p><span>Product Type &nbsp;&emsp;&nbsp; &emsp;</span>{data.type}</p>
          <p><span>Product Details &nbsp;&nbsp; &emsp;</span>{data.discription}</p>
          <p>We provide our best four You...</p>
          <button onClick={addincart}>ADD TO CART</button>
        </div>
        <div className="sx">
          <a href="/">{`<--Home`}</a><br />
          <a href="/about">{`<--About`}</a><br />
          <a href="/contact">{`<--Contact`}</a>
        </div>
      </div>
      
    </>
  )
}

export default ProductView
