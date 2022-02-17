import React from 'react'
import CartDivs from './CartDivs'

const CartPanel = (props) => {
    return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="cartModalLabel">Shopping Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <CartDivs cart={props.cart}
                              incrementItem={props.incrementItem}
                              decrementItem={props.decrementItem}
                              removeFromCart={props.removeFromCart}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Keep Shopping</button>
                    <button type="button" className="btn btn-primary">Checkout</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CartPanel