import React from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
  let param = useParams();
  return (
    <div>
      <h2>Product</h2>
      <h3>{param.product}</h3>
    </div>
  )
}

export default Product;