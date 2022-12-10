import React from "react";
import useFetch from "../../customHook/useFetch";


const url = "https://restcountries.com/v3.1/all";

export default function Countries() {
    const result= useFetch(url)
  const countriesData= result.data;
  const status = result.isLoading;

  console.log(countriesData);
  if (status){
      return <div>Loading...</div>
  }
  return (
      <div>
        <div><strong>Countries</strong></div>
          <div>
              {countriesData.map((item)=>{
                  return<div>{item.name.common}</div>
              })}

          </div>

      </div>)
}

