import React, { Component } from 'react'
import loding from './loding.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center d-flex justify-content-center mt-3 mb-3'>
        <img src={loding} alt='Loding...'></img>
      </div>
    )
  }
}
