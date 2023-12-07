import React, {useState,useEffect} from 'react'
import Pageone from './Pageone';
import Slider from './Slider';
// import api from './api';
import homeapi from './homeapi';
import lowapi from './lowapi';
import './home.css'
import Footer from './footer';

const Home = () => {

  //slider 
  // const track1 = document.getElementById("track");
  // window.onmousedown = (e) => {
  //   track1.dataset.mouseDownAt = e.clientX;
  // };
  // window.onmouseup = () => {
  //   track1.dataset.mouseDownAt = "0";
  //   track1.dataset.prevPercentage = track1.dataset.percentage;
  // };
  // window.onmousemove = (e) => {
  //   if (track1.dataset.mouseDownAt === "0") return;

  //   const mouseDelta = parseFloat(track1.dataset.mouseDownAt) - e.clientX;
  //   const maxDelta = window.innerWidth / 2;

  //   const percentage = (mouseDelta / maxDelta) * -100;
  //   const nextpercentage = Math.min(
  //     Math.max(parseFloat(track1.dataset.prevPercentage) + percentage, -100),
  //     0
  //   );

  //   track1.dataset.percentage = nextpercentage;
  //   track1.style.transform = `translate(${nextpercentage}%,0%)`;

  //   for (const image of track1.getElementsByClassName("image")) {
  //     track1.animate(
  //       {
  //         transform: `translate(${nextpercentage}%,0%)`,
  //       },
  //       { 
  //         duration: 1200, fill: "forwards" }
  //     );
  //     image.animate(
  //       {
  //         objectPosition: `${nextpercentage + 100}% center`,
  //       },
  //       { duration: 1200, fill: "forwards" }
  //     );
  //   }
  // };

  //product 
  const buttons = document.querySelectorAll('.ham');
  const descriptions = document.querySelectorAll('.des');
  const images = document.querySelectorAll('.card-img');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      console.log("hii");
      images[index].style.transform = `rotateY(${images[index].style.transform == 'rotateY(180deg)' ? '0deg' : '180deg'})`;
      descriptions[index].style.transform = `rotateY(${descriptions[index].style.transform == 'rotateY(0deg)' ? '180deg' : '0deg'})`;
  });
});




  return (
    <>
     <Pageone/>
    <Slider/>
  <section class="product1" >
    <h2>Featured Product</h2>
      <p>Summer Collection New prduct Designs</p>
      <div id="pro-container">
      {
        homeapi.map((e)=>{
          return(
            <>
              
                  <div class="pro" tabindex="1" key={e.pid}>
                    <div class="card-img"><img src={e.src} alt="" /></div>
                    <div class="des">
                      <span>adidas</span>
                      <h5>{e.pname}</h5>
                      <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h4>$149</h4>
                    </div>
                    <a href={`/productview/${e.pid}`}><i class="fa-sharp fa-solid fa-cart-plus cart"></i></a>
                    {/* <div class="ham">
                      <i class="fa-sharp fa-solid fa-bars"></i>
                    </div> */}
                  </div>
                
            </>
          )
        })
      }
      </div>
      </section>
      

      <section id="banner">
          <h4>COUPON ZONE</h4>
          <h2>up to <span>70% OFF</span> - All t-shirts & Accessories</h2>
          <button class="normal-button">Explore more</button>
      </section>
      
      <section class="product1" id="product2" >
        <h2>New Arrivals</h2>
        <p>Summer Collection New prduct Designs</p>
        <div className="px1">

        
        {
          lowapi.map((e)=>{
            return(<>
              <div id="pro-container" key={e.pid}>
                <div class="pro">
                  <div class="card-img">
                    <img src={e.src} alt="" />
                  </div>
                  <div class="des">
                    <span>adidas</span>
                    <h5>{e.pname}</h5>
                    <div class="star">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h4>$149</h4>
                  </div>
                  <a href={`/productview/${e.pid}`}><i class="fa-sharp fa-solid fa-cart-plus cart"></i></a>
                </div>
              </div>
            </>)
          })
        }
        </div>


      </section>

        <Footer/>
    </>
  )
}

export default Home
