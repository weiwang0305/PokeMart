import React, { useEffect, useState } from 'react';
import clothing1 from '../images/clothing1.jpg';
import clothing2 from '../images/clothing2.jpg';
import Products from '../components/products.jsx';

const MainDisplay = (props) => {
  return (
    <div>
      {/* <div id='example1'>
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
        </div> */}
      {props.products.map((product, index) => (
        <Products product={product} index={index} key={product._id} />
      ))}
    </div>
  );
};
export default MainDisplay;
