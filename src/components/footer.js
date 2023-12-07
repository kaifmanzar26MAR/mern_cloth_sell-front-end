import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
          <section id="newsletters">
              <div class="newstext">
                <h4>Sign Up For Newsletters</h4>
                <p>
                  Get E-mail updates about our lastest shop and
                  <span>special offers.</span>
                </p>
              </div>
              <div class="form">
                <input type="text" placeholder="Your email address" />
                <button class="normal-button">Sign Up</button>
              </div>
            </section>
          <div class="col">
            
            <div class="follow ">
              <h3>Follow Us</h3>
              <div class="icons ll">
                <a href="www.linkedin.com/in/kaifmanzar" target='_blank'><i class="fab fa-facebook-f"></i></a>
                <a href="www.linkedin.com/in/kaifmanzar" target='_blank'><i class="fab fa-instagram"></i></a>
                <a href="www.linkedin.com/in/kaifmanzar" target='_blank'><i class="fab fa-github"></i></a>
                <a href="www.linkedin.com/in/kaifmanzar" target='_blank'><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div class="col flex-col ">
            <h3>About</h3>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
          </div>
          <div class="col flex-col ">
            <h3>My Account</h3>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
          </div>
        </footer>
    </>
  )
}

export default Footer
