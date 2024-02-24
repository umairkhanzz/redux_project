import React from 'react'

const CartItems = ({name , id , imgSrc , price , qnt , decrement , increment , deleteHandler}) => {
  return (
    <>
      <div className="itemsCart">
        <img src={imgSrc} alt="item-picture" />
        <article>
            <p>{id}</p>
            <h3>{name}</h3>
            <h3>{price}</h3>
            <div className="box">
               <button onClick={() => decrement}>minus -</button>
               <p>{qnt}</p>
               <button onClick={() => increment}>plus +</button>
            </div>
            <div className="delete">
                <button onClick={() => deleteHandler}>Delete</button>
            </div>
        </article>
      </div>
    </>
  )
}

export default CartItems