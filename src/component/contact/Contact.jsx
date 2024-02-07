import React, { Component } from 'react'
import { FaStar } from "react-icons/fa";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className='Contact'>
            <h1 className='text-center'>CONTACT SECTION</h1>
            <div className='stars'>
            <FaStar />
            </div>
            <form className='w-75 m-auto'>
                <div class="mb-3">
                    <input
                        type="text"
                        class="form-control"
                        name=""
                        id=""
                        placeholder="UserName"
                    />
                </div>
                
                <div class="mb-3">
                    <input
                        type="number"
                        class="form-control"
                        name=""
                        id=""
                        placeholder="UserAge "
                    />
                </div>
                
                <div class="mb-3">
                    <input
                        type="E-mail"
                        class="form-control"
                        name=""
                        id=""
                        placeholder="UserEmail"
                    />
                </div>
                <div class="mb-3">
                    <input
                        type="password"
                        class="form-control"
                        name=""
                        id=""
                        placeholder="UserPassword"
                    />
                </div>
                <button className='btn'>submit</button>
            </form>

        </div>
      </>
    )
  }
}
