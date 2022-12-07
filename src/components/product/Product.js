import React from "react";

import {useEffect, useState} from "react";
import useFetch from "../../customHook/useFetch";

const url='https://fakestoreapi.com/products'

export default function Product() {
const product= useFetch(url).data;

/*console.log(product);*/
return (
      <div>
        <div><strong>Product</strong></div>
        {/*<div>
          {product.map((item)=>{
             return (<div>{item.title}</div>
              )})}
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title}/>
            <p>{product.description}</p>
        </div>*/}
      </div>
  )}

