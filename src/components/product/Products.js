import React from "react";
import useFetch from "../../customHook/useFetch";


const url = "https://fakestoreapi.com/products/1";
export default function Products() {
  const product= useFetch(url).data;

  /*console.log(product);*/
  return (
      <div>
        <div><strong>Products</strong></div>
      </div>)
}

