import React, {useState,useEffect} from 'react'
import './home.css'
const Pageone = () => {
//   let imgs=["./img/pic1.png","./img/pic9.png","./img/pic2.png"];
//   let left_color=["#d8e2e8","#d5e9f2","#d5e9f2"];
//   let right_color=["#8fb2b5","#784a93","#be192e"];
//   const carousel= document.querySelector(".carousel"),
//           left= document.querySelector("#left"),
//           right= document.querySelector("#right");
let images=[
    {
        src:"./img/pic1.png",left_color:"#d8e2e8",right_color:"#8fb2b5"
    },
    {
        src:"./img/pic9.png",left_color:"#d5e9f2",right_color:"#784a93"
    },
    {
        src:"./img/pic2.png",left_color:"#d5e9f2",right_color:"#be192e"
    },
];
//  let image= document.querySelector("#hero-img");

// const [imagedata,setImageData]=useState({src:"./img/pic2.png",left_color:"#d5e9f2",right_color:"#be192e"});
// let index=0;
//   const autoSlide = () => {
//     setInterval(() => changeimg(), 6000);
//     setImageData({...imagedata,src:images[index].src,left_color:images[index].left_color,right_color:images[index].right_color});
//     index++;
//     index=index%3;
//   };
//   autoSlide();

//   const changeimg = () => {
//       imageIndex = imageIndex === imgs.length ? 0 : imageIndex < 0 ? imgs.length - 1 : imageIndex;
//       // Update the carousel display to show the specified image
//       image.style.opacity=0;
//       image.src=imgs[imageIndex];
//       image.style.opacity=1;
//       left.style.backgroundColor=left_color[imageIndex];
//       right.style.backgroundColor=right_color[imageIndex];
//   };
// const {img,lcolor,rcolor}=imagedata;
// const changeimg = () => {
//     // Assuming 'image' is the ID of the image element you want to manipulate
//     // const image = document.getElementById('image');
    
//     if(img){
//         document.querySelector("#hero-img").src = img;
//         document.querySelector("#left").style.backgroundColor = lcolor;
//         document.querySelector("#right").style.backgroundColor = rcolor;
//     }
//       // Rest of your code to update the carousel display
      
      
//   };

    const [imagedata, setImageData] = useState({
      src: './img/pic2.png',
      left_color: '#d5e9f2',
      right_color: '#be192e',
    });

    let index = 0;
  
    const changeimg = () => {
      index = (index + 1) % images.length;
      setImageData({
        src: images[index].src,
        left_color: images[index].left_color,
        right_color: images[index].right_color,
      });
    };





//lout btn toggling
const [userData,setUserData]=useState({});
    // console.log(userData);
    // let navigate=useNavigate();
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
        // navigate('/login');
      }
    }
    // useEffect(()=>{
    //   callAboutPage();
    // },[]);


    useEffect(() => {
      callAboutPage();
      const interval = setInterval(changeimg, 6000);
      
      return () => {
        clearInterval(interval);
      };
    }, []);
  

  return (
    <>
       <div className="page1">
        <div id="left" style={{backgroundColor:imagedata.left_color}}>
          <div className="nav">
            <a href="/cart"><h2>Cart </h2></a>
            <a href="/gallery"><h2>gallary</h2></a>
            <a href="/"><h1>LO</h1></a>
          </div>
          <h1 id="hero-text">Latest</h1>
          <p id="hero-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at
            est ullam quod recusandae, tenetur placeat, asperiores quibusdam nam
            non aperiam? Cum odio itaque corrupti obcaecati iste dolorum
            dignissimos, blanditiis natus molestiae non. Architecto cumque
            voluptatibus eum ab, provident possimus eius quae praesentium alias,
            rem asperiores nam ea necessitatibus quasi hic id quod totam similique
            obcaecati ipsam? Rerum, tenetur est!
          </p>
        </div>
        <div id="right" style={{backgroundColor:imagedata.right_color}}>
          <div className="nav">
            <a href="/"><h1>GO</h1></a>
            <a href="/contact"><h2>contact us</h2></a>
            <a href="/about"><h2>About</h2></a>
            <div>
              {userData.name ? <a href="/logout"><button>Logout</button></a> :<a href="/login"><button>SIGN IN</button> </a>}
            </div>
            
          </div>
          <h1 id="hero-text">Fashion</h1>
          <div className="hero-img-detail">
            <p>Green</p>
            <span className="arrow"></span>
            <span className="arrow" id="arrow2"></span>
          </div>
        </div>
        <div className="carousel">
          <img id="hero-img" src={imagedata.src} alt="" />
        </div>
      </div>
      
    </>
  )
}

export default Pageone
