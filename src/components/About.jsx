import React, { Component } from 'react';
import laptopImage from '../assets/laptop.png'; // Adjust the path to navigate up one level

const About =()=> {
    // render() {
        return (
            <div className="boxed" style={{marginTop: "14vh"}}>
                <div className="main">
                    <img src={laptopImage} alt=".." className='img'/>
                </div>
            </div>
        );
    // }
}

export default About;
