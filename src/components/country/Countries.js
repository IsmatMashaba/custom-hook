import React from "react";
import useFetch from "../../customHook/useFetch";


const url = "https://restcountries.com/v3.1/name/peru";
export default function Products() {
  const product= useFetch(url).data;

  console.log(product);
  return (
      <div>
        <div><strong>Countries</strong></div>
      </div>)
}