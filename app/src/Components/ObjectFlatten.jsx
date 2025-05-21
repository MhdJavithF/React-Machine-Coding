import React, { useState } from 'react'

const ObjectFlatten = () => {

    const [input, setInput] = useState(null);
    const [output, setOutput] = useState(null);


    const objFlatFunc = (obj,parent="",result={}) =>{
        for(const key in obj){
            const path = parent ? `${parent}.${key}` : key;

            if(typeof(obj[key]) === 'object' && typeof(obj[key]) !== null ){
                objFlatFunc(obj[key],path, result);
            }
            else{
                result[path] = obj[key];
            }
        }
        return result;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(input);
        try{
            const parsedInput = JSON.parse(input);
            const Objflat = objFlatFunc(parsedInput);
            console.log(Objflat);
            setOutput(Objflat);
            return Objflat;
        }
        catch (err){
            setOutput({ error: 'Invalid JSON input' });
        }
    }

  return (
    <>
        <h1>Object Flatten Inspector</h1>
        <form onSubmit={handleSubmit}>
            <textarea value={input||''} onChange={(e) => setInput(e.target.value)} style={{width:'450px', height:'300px', fontSize:'24px', padding:'10px'}}/>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
        <pre>{output && JSON.stringify(output,null, 1)}</pre>
    </>
  )
}

export default ObjectFlatten