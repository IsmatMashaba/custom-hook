import React, {useEffect, useState} from "react";

const useFetch = (url) =>{

    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false)



    useEffect(()=>{

        function getData(){
            setIsLoading(true)
            fetch(url)
                .then((res)=>res.json())
                .then((result)=>{
                    setData(result);
                    setIsLoading(false);
                })
        }
        getData();
    },[url]);

   /* console.log(data)*/

    /*one way*/
    /*if(product.length===0){
      return <div>Loading..</div>
    }*/

    return {data, isLoading}
}

export default useFetch;
