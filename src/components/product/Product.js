
import React from "react";
import useFetch from "../../customHook/useFetch";


const url = "https://fakestoreapi.com/products/1";
export default function Products() {

    const result=useFetch(url)
    const product= result.data;
    const status=result.isLoading;

   /* console.log(product);*/
    if (status){
        return <div>Loading..</div>
    }
    return (
        <div>
            <div><strong>Product</strong></div>
            <div>{product.title}</div>
        </div>)
}

