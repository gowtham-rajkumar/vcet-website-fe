import React from 'react';
import './FooterStyles.css';

import { useState } from 'react';

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail("");
    };
  return (
    <div className='Footer-Container'>
      <div className='Footer-Section'>
        <div className='Footer-top'>
            <div className='mail-input'>
                <form action="" onSubmit={handleSubmit} className='form-mail'>
                    <input type="email" name='email' value={email} required
                    onChange={(e) => setEmail(e.target.value)}  placeholder='Email Address'/>
                    <button className='emailbtn' type='submit'><FaMailBulk/></button>
                </form>
                <p>To Recieve Our Updates Via E-mail</p>
            </div>
        </div>
            <div className='detail-section'>
                <div className='detail'>
                    <h3>ABOUT US</h3>
                    <p className='abt-p'>
                        On my way to where the air is sweet. Can you tell me how to get how to get to Sesame Street! The first mate and his Skipper too will do their very best to make the others makes comfortable
                    </p>
                    <span className='socio-img'>
                        <a href="#" ><FaXTwitter /></a>
                        <a href="#" ><FaFacebook /></a>
                        <a href="#" ><FaGoogle /></a>
                        <a href="#" ><FaLinkedinIn /></a>
                    </span>
                </div>
                <div className='detail'>
                    <h3>LATEST POSTS</h3>
                    <ul class="latest_post">
                        <li>
                            <img src="https://source.unsplash.com/random/60x60?sig=incrementingIdentifier" alt=""/>
                            <div class="latest_post_txt">
                                <h4><a href="#">On your mark get set and go now</a></h4>
                                <p>April 12, 2024</p>
                            </div>
                        </li>
                        <li>
                            <img src="https://source.unsplash.com/random/60x60?sig=incrementingIdentifier" alt=""/>
                            <div class="latest_post_txt">
                                <h4><a href="#">The ship set ground on the shore of this</a></h4>
                                <p>May 09, 2024</p>
                            </div>
                        </li>
                        <li>
                            <img src="https://source.unsplash.com/random/60x60?sig=incrementingIdentifier" alt=""/>
                            <div class="latest_post_txt">
                                <h4><a href="#">This time there's no stopping us from away</a></h4>
                                <p>June 01, 2024</p>
                            </div>
                        </li>
                    </ul>
                </div>
            <div class="detail">
                <div class="single_footer_widget">
                    <h3>LATEST TWEETS</h3>
                    <ul class="latest_tweet">
                        <FaXTwitter />
                        <li>Educamus is one of the excellent university template 
                            <a href="#">http://educampus/universitybest/</a>
                            <span>1 hours ago</span>
                        </li>
                        <FaXTwitter />
                        <li>Educamus is one of the excellent university template 
                            <a href="#">http://educampus/universitybest/</a>
                            <span>2 hours ago</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="detail">
                <div class="latest-tweet">
                    <h3>CONTACT INFO</h3>
                    <div>
                        <FaLocationDot/><p>Maruthi Nagar, Thindal, Erode, Tamil Nadu 638012</p>
                    </div>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
