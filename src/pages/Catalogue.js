import React from 'react'
import { Link } from 'react-router-dom'
import store from '../components/store'
const Catalogue = (props) => {
    const items = store();
    const itemDivs = items.map((item)=>(
      <div key={item.id}>
        <h3><Link to={`/products/${item.id}`}>{item.title}</Link></h3>
        <p>${item.price}</p>
        <button onClick={()=>{props.addToCart(item)}}>Add to cart</button>
        <button onClick={()=>{props.removeFromCart(item.id)}}>Remove From Cart</button>
      </div>));
  return (
    <div>
        <h2>Catalogue</h2>
        {itemDivs}
    </div>
  )
}

export default Catalogue
