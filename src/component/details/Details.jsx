import React, { Component } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default class Details extends Component {
  render() {
    return (
      <>
        <div className='details'>
            <div className="container">
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-md-4 pt-5">
                <h3 className='py-4'>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 pt-5">
                <h3 className='py-4'>AROUND THE WEB</h3>
                <div className='ico d-flex justify-content-center align-items-center pb-5'>
                  <div className='know'>
                  <FaFacebookF/>
                  </div>
                  <div className='know'>
                  <FaInstagram/>
                  </div>
                  <div className='know'>
                  <FaTwitter/>
                  </div>
                  <div className='know'>
                  <FaWhatsapp/>
                  </div>
                </div>

                </div>
                <div className="col-md-4 pt-5">
                <h3 className='py-4'>
                ABOUT FREELANCER</h3>
                <p className='pb-4'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            </div>
        </div>
      </>
    )
  }
}
