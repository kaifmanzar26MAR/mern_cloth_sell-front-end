import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import api from './api';
import './cart.css';
const Cart = () => {
    const [cartData,setCartData]=useState({Carts:[]});
    
    // console.log(cartData);
    let navigate=useNavigate();
    const callCartData=async()=>{
      try {
        const res=await fetch('/getdata',{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
        });
        const data=await res.json(); //data consist the mongodb data of the perticular cart
        console.log("form contact");
        // console.log(data);//data contains all the data of the cart
        console.log("this data is from cart page")
        setCartData({...cartData,Carts:data.Carts});
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
      callCartData();
    },[]);
    
    const {Carts}=cartData;
    // console.log(Carts)
    const deleteproduct=async(pid)=>{
        try {
            const res=fetch('/deleteproduct',{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify({pid})
            });
            await res.json();
        } catch (error) {
            console.log(error);
        }
        alert("Data delted from cart successfuly from out");
        // navigate('/cart');
        // console.log('navigated');
        window.location.reload()
      }
  return (
    <>
    <a href="/" className="backhome"> {"<- Back To Home"}</a>
    <div className="cartbody">
        <h1>Cart page</h1>
        <div className="cartbox">
        <p>{Carts[0]? "" : `No Cart Data Found Plaese Add data, Go Backt to Home page`}</p>
            {
                Carts.map((e)=>{
                    const {pid,pquantity}=e;
                    return(
                        <>
                            <div className="cartcard" key={pid}>
                                <div className="cartimage">
                                    <img src={api[pid-1].src} alt="cartimage" />
                                </div>
                                <div className="cartdetail">
                                    <div className="carttitle">
                                        <h2>{api[pid-1].pname}</h2>
                                    </div>
                                    <div className="cartlowdetail">
                                        <p id='quantity'>Quantity: {pquantity}</p>
                                        <button className="carddelete" onClick={()=>{deleteproduct(pid)}}>DELETE THE PRODUCT</button><br/>
                                        <br /><a href={`/productview/${pid}`}>View the Product</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
        
    </div>
    
    </>
  )
}

export default Cart
