import React, { Component } from 'react'
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default class Portfilio extends Component {
  render() {
    return (
      <>
        <div className='portfilio bg-light text-center'>
            <div className='title'>
                <h1>PORTFOLIO COMPONENT</h1>
                <div className='stars'>
                <FaStar />
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='imgPort'>
                        <img src="images/poert1.png" />
                        <div className='layOut'>
                        <a href='images/poert1.png'>
                        <FaPlus/>
                        </a>

                        </div>
                        </div>
                        
                    </div>
                    <div className='col-md-4'>
                        <div className='imgPort'>
                        <img src="images/port2.png" />
                        <div className='layOut'>
                        <a href='images/port2.png'>
                        <FaPlus/>
                        </a>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='imgPort'>
                        <img src="images/port3.png" />
                        <div className='layOut'>
                        <a href='images/port3.png'>
                        <FaPlus/>
                        </a>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='imgPort'>
                    <img src="images/poert1.png" />
                    <div className='layOut'>
                    <a href='images/poert1.png'>
                    <FaPlus/>
                    </a>
                    </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className='imgPort'>
                <img src="images/port2.png" />
                <div className='layOut'>
                <a href='images/port2.png'>
                <FaPlus/>
                </a>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
            <div className='imgPort'>
            <img src="images/port3.png" />
            <div className='layOut'>
            <a href='images/port3.png'>
            <FaPlus/>
            </a>
            </div>
            </div>
        </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
