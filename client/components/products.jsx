const products = (props) => {
  return (
    <div>
      <img src={props.state.productImg} />
      <p className='product-name'>{props.state.productName}</p>
      <p className='product-price'>{props.state.productPrice}</p>
      <p className='seller-name'>{props.state.sellerName}</p>
      <p className='seller-listing-date'>October 2, 2023</p>
    </div>
  );
};
