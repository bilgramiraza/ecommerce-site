import React, {useState} from 'react';
import './App.css';
import RouterHub from './components/RouterHub';

function App() {
  const [showCart, setShowCart]=useState(false);
  const [cart, setCart] = useState({});
  console.log(cart);
  const addToCart=(item)=>{
    setCart((prevState)=>{
      let addedItem={};
      if(prevState[item.id])
        addedItem ={
          [item.id]:{
            ...prevState[item.id],
            count:prevState[item.id].count+1,
          }};
      else{
        addedItem ={
          [item.id]:{
          itemName:item.title, 
          itemPrice:item.price, 
          itemImg:item.img, 
          count:1,
        }};
      }
      return {
        ...prevState,
        ...addedItem
      };
    });
  };
  const removeFromCart = (itemID)=>{
    setCart((prevState)=>{
      if(!prevState[itemID])  return prevState;
      
      if(prevState[itemID].count>1)
        return {...prevState,
                [itemID]:{
                  ...prevState[itemID],
                  count:prevState[itemID].count-1,
                  }
                };
      else{
        delete prevState[itemID];
        return prevState;
      }
    });

  };
  return (
    <RouterHub cart={cart} 
               addToCart={addToCart} 
               cartDisplay={showCart} 
               toggleCart={setShowCart}
               removeFromCart={removeFromCart}/>
  );
}

export default App;
