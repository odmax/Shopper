import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
            <div className="descriptionbox-description">
                <p>
                At Shopper, we bring the world to your fingertips with a wide selection of high-quality products across various categories. Our mission is to provide a seamless, convenient, and enjoyable shopping experience for customers all over the globe. Whether you're looking for the latest fashion trends, cutting-edge electronics, stylish home decor, or essential everyday items, you'll find it all here at unbeatable prices.
                </p>
                <p>
                    E-commerce website typically display product or service along with detailed description, images, price and any available variations
                </p>
            </div>
    </div>
  )
}
export default DescriptionBox
