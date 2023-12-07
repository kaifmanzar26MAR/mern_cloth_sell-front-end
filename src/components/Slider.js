import React,{useState} from 'react'

const Slider = () => {
    const [mouseDownAt, setMouseDownAt] = useState(null);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const track1 = document.getElementById("track");
    const handleMouseDown = (e) => {
      setMouseDownAt(e.clientX);
    };
  
    const handleMouseUp = () => {
      setMouseDownAt(null);
      setPrevPercentage(percentage);
    };
  
    const handleMouseMove = (e) => {
      if (mouseDownAt === null) return;
  
      const mouseDelta = mouseDownAt - e.clientX;
      const maxDelta = window.innerWidth / 2;
  
      const newPercentage = Math.min(
        Math.max(parseFloat(prevPercentage - (mouseDelta / maxDelta) * 100, -100)),
        0
      );
  
      setPercentage(newPercentage);
      track1.style.transform = `translate(${newPercentage}%,0%)`;
  
      for (const image of track1.getElementsByClassName("image")) {
        const trackAnimation = track1.animate(
          {
            transform: `translate(${newPercentage}%,0%)`,
          },
          {
            duration: 1200,
            fill: "forwards",
          }
        );
  
        // const imageAnimation = image.animate(
        //   {
        //     objectPosition: `${newPercentage + 100}% center`,
        //   },
        //   {
        //     duration: 1200,
        //     fill: "forwards",
        //   }
        // );
  
        Promise.all([trackAnimation.finished]).then(
          () => {
            // Animation completed
          }
        );
      }
    };
  return (
    <>
      <div class="logo-list">
        <img src="./img/adidas.jpeg" alt="" />
        <img src="./img/gucci.png"
          alt=""
        />
        <img src="./img/nike.jpeg" alt="" /><img
          src="./img/zara.png"
          alt=""
        />
        <img src="./img/pant.jpg" alt="" />
      </div>

      <section class="slider">
        <div id="track" data-mouse-down-at="0" data-prev-percentage="0" onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
          <h1>Slide to see more</h1>
          <img class="image" src="./img/slider/pic1.jpg" alt="" draggable="false" />
          <img class="image" src="./img/slider/pic2.jpg" alt="" draggable="false" />
          <img class="image" src="./img/slider/pic3.jpg" alt="" draggable="false" />
          <img class="image" src="./img/slider/pic4.jpg" alt="" draggable="false" />
          <img class="image" src="./img/slider/pic5.jpg" alt="" draggable="false" />
          <img class="image" src="./img/slider/pic6.jpg" alt="" draggable="false" />
          <img class="image" src="./img/slider/pic7.jpg" alt="" draggable="false" />
        </div>
      </section>
    </>
  )
}

export default Slider
