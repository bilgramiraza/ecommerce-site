import React from 'react'
import CartModal from './Cart/CartModal';
import Navbar from './Navbar'

const Header = (props) => {
  return (
		<header>
			<h2>Header</h2>
		<Navbar />
		<CartModal cart={props.cart}
					increaseItemCount={props.increaseItemCount}
					decreaseItemCount={props.decreaseItemCount}
					removeFromCart={props.removeFromCart}
					resetCart={props.resetCart}/>
		</header>
  	);
}

export default Header;