import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './about.css'

const About = () => {
    const [userData,setUserData]=useState({});
    // console.log(userData);
    let navigate=useNavigate();
    const callAboutPage=async()=>{
      try {
        const res=await fetch('/about',{
          method:"GET",
          headers:{
            Accept:"application/json", //accepting cookie as json and saving it to localstorage cookie
            "Content-Type":"application/json"
          },
          credentials:"include" //for sending cookie
        });
        const data=await res.json(); //data consist the mongodb data of the perticular user
        // console.log(data);
        setUserData(data);
        if(!res.status===200){
          const error=new Error(res.error);
          throw error;
        }
  
      } catch (error) {
        console.log(error);
        navigate('/login');
      }
    }
    useEffect(()=>{
      callAboutPage();
    },[]);
    const {name,email,phone,profile,address}=userData;
    

  return (
    <>
      <div className="abcontainer">
        <form method="GET " className="datas">
          <div className="upperdata">
            <div className="profi">
              <img id='prof' src={profile} alt="img" />
              <div className="mes">
                <p id='welcome'>Welcome! </p>
                <p>Nice to See You Again </p>
                <p>Hope You Are Doing Great</p>
                <p>Enjoy Our website, Thank You</p>
              </div>
            </div>
            <div className="maindata">
              <h3 id='myname'>Name : {name}</h3>
              <h3 id='myname'>Email : {email}</h3>
              <h3 id='myname'>Phone : {phone}</h3>
              <h3 id='myname'>Address : {address}</h3>
              {/* <h5 id="title">{work}</h5> */}
              <p id='rating'>Rating: ⭐⭐⭐⭐</p>
              <p id="longtitle">Pasonate about createing responsive websites, all of my clients are alwys appreciate me for my work </p>
            </div>
          </div>
        </form>
      </div>
      <div className="simg" id="nav">
      <a href="/">Home</a><br />
      <hr /><br />
      <a href="/contact">Contact Us</a><br />
      <hr /><br />
      <a href="/cart">Cart</a><br />
      <hr />
      
    </div>
    </>
  )
}

export default About
