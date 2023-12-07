import React, {useState} from 'react'
// import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import './sign.css';
const Signup = () => {
    
    let navigate = useNavigate();
    const [user,setUser]=useState({
        name:"",email:"",phone:"",profile:"",address:"",password:"",cpassword:"",
    });
    // console.log(user);
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }

    //posting data to backend
    const PostData=async(e)=>{
        e.preventDefault(); //to avoid automatic reload
        const {name,email,phone,profile,address,password,cpassword}=user; //object destucturing
        const res=await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json" //data type of the data we are using in frontend
            },
            body:JSON.stringify({ //converting json to string because backend only understand string data
                name,email,phone,profile,address,password,cpassword
            })
        });

        //checking the response 
        const data=await res.json();
        // console.log(data.status);
        if(data.error || !data){ //status send by the backend part that we have given
            window.alert("Registration Invalid");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration Successfull");
            console.log("Successfull Registration");
            navigate('/login');//this will redirect page to login page
             
        }
    }
    //making image to base64 for uploading in database.
    const uploadImage=async(e)=>{
        const file=e.target.files[0];
        const name=e.target.name;
        const base64=await consvertBase64(file);
        setUser({...user,[name]:base64});
    }
    const consvertBase64=(file)=>{
        return new Promise((resolve,reject)=>{
            const fileReader=new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload=()=>{
                resolve(fileReader.result);
            };
            fileReader.onerror=(error)=>{
                reject(error);
            };
        });
    };

    
  return (
    <>
    
      <section className='signup'>
        <div className="container">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className='form-title'>Sign up</h2>
                    <form method='POST' className="register-form" id='register-form'>
                        <div className="form-group">
                            <label htmlFor="name"><i class="fa-solid fa-user"></i></label>
                            <input type="text" name='name' id='name' autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Your name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                            <input type="email" name='email' id='email' autoComplete='off' value={user.email} onChange={handleInputs} placeholder='Your Email'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone"><i class="fa-solid fa-phone"></i></label>
                            <input type="txt" name='phone' id='phone' autoComplete='off' value={user.phone} onChange={handleInputs} placeholder='Your Phone'/>
                        </div><label htmlFor="image">image size must be less than 1MB</label>
                        <div className="form-group">
                            <label htmlFor="profile"><i class="fa-solid fa-gears"></i></label>
                            <input type="file" name='profile' id='profile'  onChange={(e)=>{uploadImage(e)}} alt='submit' />
                            
                            <img src={user.profile} alt="Uploaded Image" id='upimg'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address"><i class="fa-solid fa-address"></i></label>
                            <input type="txt" name='address' id='address' autoComplete='off' value={user.address} onChange={handleInputs} placeholder='Your address'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                            <input type="password" name='password' id='password' autoComplete='off' value={user.password} onChange={handleInputs} placeholder=' Password'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpassword"><i class="fa-solid fa-lock"></i></label>
                            <input type="password" name='cpassword' id='cpassword' autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='Confirm Password'/>
                        </div>
                        <div className="form-button">
                            <input type="submit" name='signup' id='signup' className='form-sumbmit' value='Register' onClick={PostData}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="hhh">
            <a href="/">{`<--Home`}</a><br/>
        </div>
      </section>
    </>
  )
}

export default Signup
