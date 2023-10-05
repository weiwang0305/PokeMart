import React, { useEffect, useState } from 'react';
import Products from '../components/products.jsx';

const MainDisplay = (props) => {
  return (
    <div className='product-container'>
      {props.products.map((product, index) => (
        <Products product={product} index={index} key={product._id} />
      ))}
    </div>
  );
};
export default MainDisplay;
