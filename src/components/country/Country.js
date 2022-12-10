import React from "react";
import useFetch from "../../customHook/useFetch";

const url = "https://restcountries.com/v3.1/name/peru";

export default function Products() {
  const result= useFetch(url);
  const countryData=result.data;
  const status=result.isLoading;

  /*console.log(countryData);*/
  if (status){
      return <div>Loading...</div>
  }
  return (
      <div>
        <div><strong>Country</strong></div>
          <div>
              {countryData.map((item)=>{
                  return<div>{item.name.common}</div>
              })}

          </div>
      </div>)
}

