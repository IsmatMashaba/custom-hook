import React from "react";
import useFetch from "../../customHook/useFetch";


const url = "https://fakestoreapi.com/products";
export default function Products() {
    const result=useFetch(url)
  const products= result.data;
  const status=result.isLoading;

  /*console.log(products);*/
    if (status){
        return <div>Loading..</div>
    }
  return (
      <div>
        <div><strong>Products</strong></div>
          <div>
              {products.map((item)=>{
                  return<div>{item.category}</div>
              })}

          </div>
      </div>)
}

