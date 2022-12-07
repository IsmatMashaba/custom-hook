import React from "react";
import useFetch from "../../customHook/useFetch";


const url = "https://restcountries.com/v3.1/all";
export default function Products() {
  const product= useFetch(url).data;

  /*console.log(product);*/
  return (
      <div>
        <div><strong>Country</strong></div>
      </div>)
}