import React from 'react';

const Products = ({ product }) => {
  return (
    <div className='product-box'>
      <img src={`${product.fileName}`} />
      <p className='product-name'>{product.productName}</p>
      <p className='product-price'>₽{product.productPrice}</p>
      <p className='seller-name'>Seller: {product.sellerName}</p>
      <p className='seller-listing-date'>
        Listed Date: {product.createdAt.slice(0, 10)}
      </p>
    </div>
  );
};
export default Products;
