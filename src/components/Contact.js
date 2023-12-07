import React,{useState,useEffect} from 'react'
import './contact.css'
const Contact = () => {
    const [userData,setUserData]=useState({name:"",email:"",phone:"",message:""});
    // console.log(userData);
    // let navigate=useNavigate();
    const callgetData=async()=>{
      try {
        const res=await fetch('/getdata',{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
        });
        const data=await res.json(); //data consist the mongodb data of the perticular user
        console.log("form contact");
        // console.log(data);//data contains all the data of the user
        setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
        if(!res.status===200){
          const error=new Error(res.error);
          throw error;
        }
  
      } catch (error) {
        console.log(error);
        // navigate('/login');
      }
    }
    useEffect(()=>{
      callgetData();
    },[]);


    const handleInputs=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserData({...userData,[name]:value});
      }
    const {name,email,phone,message}=userData;


    //Sending data to backend to store
  const contactForm=async (e)=>{
    e.preventDefault();
    const res=await fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,phone,message})
    });
    const data=await res.json();
    if(!data){
      console.log("message not send");
    }else{
      alert("Message send successfuly");
      setUserData({...userData,message:""});
    }
  }

  return (
    <div className='ctcontainer'>
      <div className="in">
      <h2>Contact Us</h2>
        <form method='GET'>
        <input className='inp' type="text" name='name' value={name} onChange={handleInputs} placeholder='Your Name' />
                <input className='inp' type="email" name='email' value={email} onChange={handleInputs} placeholder='Your E-mail' />
                <input className='inp' type="text" name='phone' value={phone} onChange={handleInputs} placeholder='Your Phone' />
                <textarea name="message" id="message" cols="30" rows="9" placeholder='Enter Your Message' value={message} onChange={handleInputs}/>
                <button onClick={contactForm}>Message Us</button>
        </form>
      </div>
      <img src="https://images.pexels.com/photos/17683236/pexels-photo-17683236/free-photo-of-people-festival-high-travel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" id="sd" className='simg'/>
      <img src="https://images.pexels.com/photos/3986923/pexels-photo-3986923.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img" id="sd1" className='simg'/>
      <img src="https://images.pexels.com/photos/3541916/pexels-photo-3541916.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" id='sd2' className='simg'/>
      <p id='text' className="simg">We Provide our Best to The consumenrs...<br/>We Always Belive in ourself.. <br/> We complete all our work with a great <br/>devotion... </p>
    <div className="simg" id="nav">
      <a href="/">Home</a><br />
      <hr /><br />
      <a href="/about">About</a><br />
      <hr /><br />
      <a href="/cart">Cart</a><br />
      <hr />
      
    </div>
    
    </div>

  )
}

export default Contact
