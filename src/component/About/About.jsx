import React, { Component } from 'react';
import { FaStar } from "react-icons/fa";



export default class About extends Component {
  render() {
    return (
      <>
      <div className='About'>
        <div classname="container">
        <div classname="col-md-12">
            <div classname="row ">
            <h1 className='text-center'>ABOUT COMPONENT</h1>
            </div>
            <div className='stars'>
            <FaStar />
            </div>
        </div>
        <div className="row justify-content-center align-items-center">
        <div className="col-md-6 first">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6  sec">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        
        </div>
      </div>
        </div>
      </div>

      </>
    )
  }
}
