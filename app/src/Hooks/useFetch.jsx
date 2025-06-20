import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [response, setResponse] = useState();

    useEffect(() => {
        fetch(url).then(res => res.json())
        .then(data => setResponse(data))
        .catch(err => console.log("Error :", err));
    },[url]);
  return response;
}

export default useFetch