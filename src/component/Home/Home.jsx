import React, { Component } from 'react'
import { FaStar } from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='home text-light' id='home'>
            <div className='img w-25 h-50 m-auto'>
                <img src='images/avataaars.svg' alt=''/>
            </div>
            <div className='text-center py-3'>
                <h1>START FRAMEWORK</h1>
                <div className='stars'>
                <FaStar />
                </div>
                <span> Graphic Artist - Web Designer - Illustrator</span>
            </div>
        </div>
      </>
    )
  }
}
