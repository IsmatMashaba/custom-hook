import React, {useEffect, useState} from "react";

const useFetch = (url) =>{

    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false)

    function getData(){
        setIsLoading(true)
        fetch(url)
            .then((res)=>res.json())
            .then((result)=>{
                setData(result);
                setIsLoading(false);
            })
    }

    useEffect(()=>{
        getData();
    },[]);

   /* console.log(data)*/

    /*one way*/
    /*if(product.length===0){
      return <div>Loading..</div>
    }*/
    if (isLoading){
        return <div>Loading..</div>
    }
    return {data}
}

export default useFetch;
