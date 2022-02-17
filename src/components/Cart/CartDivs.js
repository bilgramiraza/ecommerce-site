import React from 'react'

const CartDivs = (props) => {
    const cartkeys=Object.keys(props.cart);
    const cartDivs=cartkeys.map((key)=>{
        return (<div key={key}>
            <button onClick={()=>props.removeFromCart(key)}>X</button>
            <p>{props.cart[key].itemName}</p>
            <p>{props.cart[key].itemImg}</p>
            <p>{props.cart[key].itemPrice}</p>
            <div>
                <button onClick={()=>props.incrementItem(key)}>+</button>
                <span>{props.cart[key].count}</span>
                <button onClick={()=>props.decrementItem(key)}>-</button>
            </div>
        </div>);
    });
  return (
    <div>
        {cartDivs}
    </div>
  )
}

export default CartDivs;