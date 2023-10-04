import React from 'react';
import clothing1 from '../images/clothing1.jpg';
import clothing2 from '../images/clothing2.jpg';

const MainDisplay = (props) => {
  return (
    <div>
      <div id='products-container'>
        <div id='example1'>
          <img src={clothing1} />
          <p className='product-name'>Brown hoodie</p>
          <p className='product-price'>$60.99</p>
          <p className='seller-name'>Ashley</p>
          <p className='seller-listing-date'>October 3, 2023</p>
        </div>
        <div id='example2'>
          <img src={clothing2} />
          <p className='product-name'>Black T-shirt</p>
          <p className='product-price'>$32.59</p>
          <p className='seller-name'>Richard</p>
          <p className='seller-listing-date'>October 2, 2023</p>
        </div>
        {props.products}
      </div>
    </div>
  );
};
export default MainDisplay;
