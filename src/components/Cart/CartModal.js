import React from 'react'
import CartPanel from "./CartPanel";

const CartModal = (props) => {
	console.log(props);
	return (
		<>
			<p data-bs-toggle="modal" data-bs-target="#cartModal">
				Cart Modal Trigger
			</p>
			<CartPanel cart={props.cart}
						incrementItem={props.increaseItemCount}
						decrementItem={props.decreaseItemCount}
						removeFromCart={props.removeFromCart}/>
		</>
	)
}
export default CartModal;
