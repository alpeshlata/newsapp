import React from 'react'
import loding from './loding.gif'
const Spinner=()=> {
  
    return (
      <div className='text-center d-flex justify-content-center mt-3 mb-3'>
        <img src={loding} alt='Loding...'></img>
      </div>
    )
}
export default  Spinner