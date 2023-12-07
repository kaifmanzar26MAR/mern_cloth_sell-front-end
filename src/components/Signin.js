import React, {useState} from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
const Signin = () => {
    const history=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    // console.log(email);
    // console.log(password);
    const loginUser=async(e)=>{
      e.preventDefault();
      const res=await fetch('/signin',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,password
        })
      });
      const data=await res.json();
  
      if(!data || data.error){
        window.alert("Invalid Credentials");
      }else{
        window.alert("Login Successfull");
        history('/');
      }
    }
  return (
    <>
      <section className='signup'>
      <div className="hhh">
        <a href="/" >{`<--Home`}</a>
      </div>
      
        <div className="container">
            <div className="signin-content">
                <div className="signin-form">
                    <h2 className='form-title'>Login</h2>
                    <div className="cccc">
                      <form method='POST' className="register-form" id='register-form'>
                          
                          <div className="form-group">
                              <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                              <input type="email" name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off' placeholder='Your Email'/>
                          </div>
                          
                          <div className="form-group">
                              <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                              <input type="password" name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='off' placeholder=' Password'/>
                          </div>
                        
                          <div className="form-button">
                              <input type="submit" name='signin' id='signin' className='form-sumbmit' value='Login' onClick={loginUser}/><br/>
                              <NavLink id='reg' to={'/signup'}>You can Register Yourself here</NavLink>
                          </div>
                      </form>
                      
                    </div>
                </div>
            </div>
        </div>
        
      </section>
    </>
  )
}

export default Signin
