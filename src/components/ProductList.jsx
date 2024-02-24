import React from 'react'

const ProductList = ({ name, id, price, handler, imgSrc }) => {

    return (
        <div>
            <div className="productlist">
                <div className="image">
                    <img src={imgSrc} alt="item-picture" />
                    <h2>{name}</h2>
                    <h3>{price}</h3>
                    <p>{id}</p>
                    <button onClick={() => handler({name , price , id , imgSrc , quantity : 1 })} >Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductList