import React, {useState} from 'react';
import './App.css';
import RouterHub from './components/RouterHub';

function App() {
	const [cart, setCart] = useState({});
	const itemExistsInCart=(itemID)=>{  //Checks if the item is already added to cart
		if(cart[itemID])
			return true
		else
			return false;
	}
	const addToCart=(item)=>{         //Adds new items to the cart
		setCart((prevState)=>{          
			if(prevState[item.id])  return;
	
			return {
				...prevState,
				[item.id]:{
					itemName:item.title, 
					itemPrice:item.price, 
					itemImg:item.img, 
					count:1,
				}};
		});
	};
	const removeFromCart=(itemID)=>{       //Removes items from the cart
		setCart((prevState)=>{
			if(!prevState[itemID])  return prevState;
			delete prevState[itemID];
			return prevState;
		});
	}
	const addItem=(itemID)=>{         //Increases the count of the existing items in cart
		setCart((prevState)=>{
			if(!prevState[itemID])  return prevState;
	
			return{
				...prevState,
				[itemID]:{
					...prevState[itemID],
					count:prevState[itemID].count+1,
				}};
		});
	}
	const removeItem = (itemID)=>{  //Decreases the count of the existing items in cart
		setCart((prevState)=>{
			if(!prevState[itemID])  return prevState;
			
			if(prevState[itemID].count>1)
				return {
					...prevState,
					[itemID]:{
						...prevState[itemID],
						count:prevState[itemID].count-1,
						}
					};
			else return prevState;
		});
	};
	return (
		<RouterHub  cart={cart}
								addToCart={addToCart}
								removeFromCart={removeFromCart}
								increaseItemCount={addItem}
								decreaseItemCount={removeItem}
								itemExists={itemExistsInCart}/>
	);
}

export default App;
