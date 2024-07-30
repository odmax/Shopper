import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type = "email" placeholder='Your Email id' />
            <button>Subcribe</button>
        </div>
    </div>
  )
}
export default NewsLetter;