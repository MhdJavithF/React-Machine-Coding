import React, { useEffect, useState } from 'react'
const URL = "https://pokeapi.co/api/v2/pokemon";
const Pokiemon = () => {
    const [datas, setDatas] = useState([]);
    const [details, setDetails] = useState();

    useEffect(() => {
        fetch(URL).then(res => res.json())
        .then(data => setDatas(data.results));
    },[])

    const handleSelect = async (e) => {
        const val = e.target.value;
        const res = await fetch(val);
        const data = await res.json();
        setDetails(data);
    }
  return (
    <div>
        <select onChange={handleSelect} style={{fontSize:"20px",padding:"10px"}}>
            {datas?.map(pokie => (
                <option key={pokie.name} value={pokie.url}>{pokie.name}</option>
            ))}
        </select>

        {details && <h2>{details.height}</h2>}
    </div>
  )
}

export default Pokiemon