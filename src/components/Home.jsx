import React from 'react'
import ProductList from './ProductList'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {
  const ListProduct = [
    {
      name: "Macbook",
      price: 12000,
      imgSrc: "sf",
      id: "121"
    },
    {
      name: "Shoes",
      price: 920,
      imgSrc: "sfgref",
      id: "111"
    },
  ];

  const dispatch = useDispatch();

  const addtoCartHandler = (options) => {
    console.log(options);
    dispatch({type: "addtoCart" , payload: options})
    toast.success("Added to cart");
  }

  return (
    <>
      <h1>Following are the items in our shop</h1>
      {
        ListProduct.map((i) => (
          <ProductList
            key={i.id}
            imgSrc={i.imgSrc}
            price={i.price}
            name={i.name}
            id={i.id}
            handler={addtoCartHandler}
          />
        ))
      }
    </>
  )
}

export default Home