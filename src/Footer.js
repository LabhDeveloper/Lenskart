import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <hr/>
            <center>
                <p style={{fontSize:"20px",color:"white"}}>&copy; Labh K</p>
            </center>
            <hr/>
            <div className="con">
                <span>SERVICES</span>
                <span>About Us</span>
                <span>HELP</span>
                <img src="https://i.ibb.co/Sy1Ysr2/dx.jpg" alt="play" />
            </div>
            <div className="fot">
                <span>Store Locator</span>
                <span>We Are Hiring</span>
                <span>FAQ's</span>
                <img src="https://i.ibb.co/J2Wn5tT/bx.jpg" alt="play" />
            </div>
            <div className="dat">
                <span>Enter My Power</span>
                <span>Refer & Earn</span>
                <span>Site Map</span>
            </div>
            <div className="hat">
                <span>Buying Guide</span>
                <span>Lenskart Coupons</span>
                <span style={{marginLeft:"25%",fontSize:"22px"}}>Download Lenskart App to buy</span>
                
            </div>
            <div className="play">
                <p>Eyeglasses, Sunglasses and Contact Lenses</p>
            </div>
            
            
            <hr/>
            <div className="wer">
                <span>T & C</span>
                <span>Privacy</span>
                <span>Disclaimer</span>

                <span style={{marginLeft:"50%"}}>FOLLOW US AT</span>
                <img src="https://i.ibb.co/dtzG625/facebook.png" alt="facebook"/>
                <img src="https://i.ibb.co/19H5LvT/insta.png" alt="insta"/>
                <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="utub"/>
            </div>
            
        </footer>
    
    )

}

export default Footer