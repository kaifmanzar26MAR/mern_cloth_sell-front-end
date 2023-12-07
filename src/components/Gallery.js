import React from 'react'
import api from './api'
import './gal.css'
import Footer from './footer'

const Gallery = () => {
    
  return (
    <>
      <a href="/" className="backhome"> {"<- Back To Home"}</a>
    <div className="cartbody cb">
        <h1>Gallery page</h1>
        <div className="cartbox ctb">
            
            <div className="cartcard" key={api[0].pid}>
                <div className="cartimage">
                    <img src={api[0].src} alt="cartimage" />
                </div>
                <div className="cartdetail">
                    <div className="carttitle">
                    <br />
                    <br />
                        <h2>{api[0].pname}</h2>
                    </div>
                    <div className="cartlowdetail">
                        {/* <p id='quantity'>Quantity: {pquantity}</p> */}
                        {/* <button className="carddelete" onClick={()=>{deleteproduct(pid)}}>DELETE THE PRODUCT</button><br/> */}
                        <a href={`/productview/${api[0].pid}`}>View the Product</a>
                    </div>
                </div>
            </div>
            <div className="gdetail">
                <h1>{api[0].pname}</h1>
                <h3>{api[0].ptitle}</h3>
                <p><span>Product Color &emsp; &emsp;</span>{api[0].pcolor}</p>
                <p><span>Ratings </span>&nbsp;&emsp; &emsp;&nbsp;&emsp; &emsp;&emsp;⭐⭐⭐⭐⭐ </p>
                <p><span>Product Fiber &nbsp;&emsp; &emsp;</span>{api[0].fiber}</p>
                <p><span>Product Type &nbsp;&emsp;&nbsp; &emsp;</span>{api[0].type}</p>
                <p><span>Product Details &nbsp;&nbsp; &emsp;</span>{api[0].discription}</p>
                <p>We provide our best four You...</p>
            </div>
                      
        </div>

        <br />


        <div className="cartbox ctb">
            <div className="gdetail">
                <h1>{api[3].pname}</h1>
                <h3>{api[3].ptitle}</h3>
                <p><span>Product Color &emsp; &emsp;</span>{api[3].pcolor}</p>
                <p><span>Ratings </span>&nbsp;&emsp; &emsp;&nbsp;&emsp; &emsp;&emsp;⭐⭐⭐⭐⭐ </p>
                <p><span>Product Fiber &nbsp;&emsp; &emsp;</span>{api[3].fiber}</p>
                <p><span>Product Type &nbsp;&emsp;&nbsp; &emsp;</span>{api[3].type}</p>
                <p><span>Product Details &nbsp;&nbsp; &emsp;</span>{api[3].discription}</p>
                <p>We provide our best four You...</p>
            </div>
             <div className="cartcard" key={api[3].pid}>
                <div className="cartimage">
                    <img src={api[3].src} alt="cartimage" />
                </div>
                <div className="cartdetail">
                    <div className="carttitle">
                    <br />
                    <br />
                        <h2>{api[3].pname}</h2>
                    </div>
                    <div className="cartlowdetail">
                        {/* <p id='quantity'>Quantity: {pquantity}</p> */}
                        {/* <button className="carddelete" onClick={()=>{deleteproduct(pid)}}>DELETE THE PRODUCT</button><br/> */}
                        <a href={`/productview/${api[3].pid}`}>View the Product</a>
                    </div>
                </div>
            </div>         
        </div>
        
        <br />

        
        <div className="cartbox ctb">
            
            <div className="cartcard" key={api[5].pid}>
                <div className="cartimage">
                    <img src={api[5].src} alt="cartimage" />
                </div>
                <div className="cartdetail">
                    <div className="carttitle">
                    <br />
                    <br />
                        <h2>{api[5].pname}</h2>
                    </div>
                    <div className="cartlowdetail">
                        {/* <p id='quantity'>Quantity: {pquantity}</p> */}
                        {/* <button className="carddelete" onClick={()=>{deleteproduct(pid)}}>DELETE THE PRODUCT</button><br/> */}
                        <a href={`/productview/${api[5].pid}`}>View the Product</a>
                    </div>
                </div>
            </div>
            <div className="gdetail">
                <h1>{api[5].pname}</h1>
                <h3>{api[5].ptitle}</h3>
                <p><span>Product Color &emsp; &emsp;</span>{api[5].pcolor}</p>
                <p><span>Ratings </span>&nbsp;&emsp; &emsp;&nbsp;&emsp; &emsp;&emsp;⭐⭐⭐⭐⭐ </p>
                <p><span>Product Fiber &nbsp;&emsp; &emsp;</span>{api[5].fiber}</p>
                <p><span>Product Type &nbsp;&emsp;&nbsp; &emsp;</span>{api[5].type}</p>
                <p><span>Product Details &nbsp;&nbsp; &emsp;</span>{api[5].discription}</p>
                <p>We provide our best four You...</p>
            </div>
                      
        </div>
        
        <br />

        <div className="cartbox ctb">
            <div className="gdetail">
                <h1>{api[7].pname}</h1>
                <h7>{api[7].ptitle}</h7>
                <p><span>Product Color &emsp; &emsp;</span>{api[7].pcolor}</p>
                <p><span>Ratings </span>&nbsp;&emsp; &emsp;&nbsp;&emsp; &emsp;&emsp;⭐⭐⭐⭐⭐ </p>
                <p><span>Product Fiber &nbsp;&emsp; &emsp;</span>{api[7].fiber}</p>
                <p><span>Product Type &nbsp;&emsp;&nbsp; &emsp;</span>{api[7].type}</p>
                <p><span>Product Details &nbsp;&nbsp; &emsp;</span>{api[7].discription}</p>
                <p>We provide our best four You...</p>
            </div>
             <div className="cartcard" key={api[7].pid}>
                <div className="cartimage">
                    <img src={api[7].src} alt="cartimage" />
                </div>
                <div className="cartdetail">
                    <div className="carttitle">
                    <br />
                    <br />
                        <h2 style={{color:"white"}}>{api[7].pname}</h2>
                    </div>
                    <div className="cartlowdetail">
                        {/* <p id='quantity'>Quantity: {pquantity}</p> */}
                        {/* <button className="carddelete" onClick={()=>{deleteproduct(pid)}}>DELETE THE PRODUCT</button><br/> */}
                        <a href={`/productview/${api[7].pid}`}>View the Product</a>
                    </div>
                </div>
            </div>         
        </div>


        <br />
        
        <div className="cartbox ctb">
            
            <div className="cartcard" key={api[8].pid}>
                <div className="cartimage">
                    <img src={api[8].src} alt="cartimage" />
                </div>
                <div className="cartdetail">
                    <div className="carttitle">
                    <br />
                    <br />
                        <h2>{api[8].pname}</h2>
                    </div>
                    <div className="cartlowdetail">
                        {/* <p id='quantity'>Quantity: {pquantity}</p> */}
                        {/* <button className="carddelete" onClick={()=>{deleteproduct(pid)}}>DELETE THE PRODUCT</button><br/> */}
                        <a href={`/productview/${api[8].pid}`}>View the Product</a>
                    </div>
                </div>
            </div>
            <div className="gdetail">
                <h1>{api[8].pname}</h1>
                <h3>{api[8].ptitle}</h3>
                <p><span>Product Color &emsp; &emsp;</span>{api[8].pcolor}</p>
                <p><span>Ratings </span>&nbsp;&emsp; &emsp;&nbsp;&emsp; &emsp;&emsp;⭐⭐⭐⭐⭐ </p>
                <p><span>Product Fiber &nbsp;&emsp; &emsp;</span>{api[8].fiber}</p>
                <p><span>Product Type &nbsp;&emsp;&nbsp; &emsp;</span>{api[8].type}</p>
                <p><span>Product Details &nbsp;&nbsp; &emsp;</span>{api[8].discription}</p>
                <p>We provide our best four You...</p>
            </div>
                      
        </div>
        
        <br />


        <div className="cartbox ctb">
            <div className="gdetail">
                <h1>{api[11].pname}</h1>
                <h3>{api[11].ptitle}</h3>
                <p><span>Product Color &emsp; &emsp;</span>{api[11].pcolor}</p>
                <p><span>Ratings </span>&nbsp;&emsp; &emsp;&nbsp;&emsp; &emsp;&emsp;⭐⭐⭐⭐⭐ </p>
                <p><span>Product Fiber &nbsp;&emsp; &emsp;</span>{api[11].fiber}</p>
                <p><span>Product Type &nbsp;&emsp;&nbsp; &emsp;</span>{api[11].type}</p>
                <p><span>Product Details &nbsp;&nbsp; &emsp;</span>{api[11].discription}</p>
                <p>We provide our best four You...</p>
            </div>
             <div className="cartcard" key={api[11].pid}>
                <div className="cartimage">
                    <img src={api[11].src} alt="cartimage" />
                </div>
                <div className="cartdetail">
                    <div className="carttitle">
                    <br />
                    <br />
                        <h2>{api[11].pname}</h2>
                    </div>
                    <div className="cartlowdetail">
                        {/* <p id='quantity'>Quantity: {pquantity}</p> */}
                        {/* <button className="carddelete" onClick={()=>{deleteproduct(pid)}}>DELETE THE PRODUCT</button><br/> */}
                        <a href={`/productview/${api[11].pid}`}>View the Product</a>
                    </div>
                </div>
            </div>         
        </div>



        <br />

        
        <div className="cartbox ctb">
            
            <div className="cartcard" key={api[12].pid}>
                <div className="cartimage">
                    <img src={api[12].src} alt="cartimage" />
                </div>
                <div className="cartdetail">
                    <div className="carttitle">
                    <br />
                    <br />
                        <h2 >{api[12].pname}</h2>
                    </div>
                    <div className="cartlowdetail">
                        {/* <p id='quantity'>Quantity: {pquantity}</p> */}
                        {/* <button className="carddelete" onClick={()=>{deleteproduct(pid)}}>DELETE THE PRODUCT</button><br/> */}
                        <a href={`/productview/${api[12].pid}`}>View the Product</a>
                    </div>
                </div>
            </div>
            <div className="gdetail">
                <h1>{api[12].pname}</h1>
                <h3>{api[12].ptitle}</h3>
                <p><span>Product Color &emsp; &emsp;</span>{api[12].pcolor}</p>
                <p><span>Ratings </span>&nbsp;&emsp; &emsp;&nbsp;&emsp; &emsp;&emsp;⭐⭐⭐⭐⭐ </p>
                <p><span>Product Fiber &nbsp;&emsp; &emsp;</span>{api[12].fiber}</p>
                <p><span>Product Type &nbsp;&emsp;&nbsp; &emsp;</span>{api[12].type}</p>
                <p><span>Product Details &nbsp;&nbsp; &emsp;</span>{api[12].discription}</p>
                <p>We provide our best four You...</p>
            </div>
                      
        </div>
        
    </div>
    <br />
    <br />
    
    <Footer/>
    </>
  )
}

export default Gallery
