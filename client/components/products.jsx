import React from 'react';

const Products = ({ product }) => {
  return (
    <div>
      <p className='product-name'>{product.productName}</p>
      <p className='product-price'>{product.productPrice}</p>
      <p className='seller-name'>{product.sellerName}</p>
      <p className='seller-listing-date'>{product.createdAt}</p>
    </div>
  );
};
export default Products;
