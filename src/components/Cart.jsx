import React from 'react';
import CartItems from './CartItems';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const increment = (id) => {
        dispatch({type: "addtoCart" , payload: { id }})
    }
    const decrement = (id) => {
        dispatch({type: "decrement" , payload: { id }})
    }
    const deleteHandler = (id) => {
        dispatch({type: "deleteitem" , payload: { id }})
    }

    return (
        <>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((i) => (
                            <CartItems
                                imgSrc={i.imgSrc}
                                name={i.name}
                                price={i.price}
                                id={i.id}
                                qnt={i.quantity}
                                key={i.id}
                                decrement= {decrement}
                                increment={increment}
                                deleteHandler={deleteHandler}
                            />
                        ))
                    ) : <h1>No items found in cart</h1>
                }
            </main>
            <aside>
                <h1>your bill is ready here please pay it !</h1>
                <h3>Sub-total: ${2000}</h3>
                <h3>Shipping: ${10}</h3>
                <h3>Tax: ${200}</h3>
                <h2>Your Total Bill is: ${63456}</h2>
            </aside>
        </>
    )
}

export default Cart