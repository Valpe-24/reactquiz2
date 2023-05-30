import React, {useState} from "react";

export const NumberBuilder = () => {
    let [numberString, setNumberString] = useState('');
    let [counter, setCounter] = useState(0);
    
    const handleClick= (parameter) => {
        if(parameter === 'add'){
            setCounter(++counter); 
            setNumberString(numberString += `${counter.toString()} `)
        }else if(parameter === 'reset'){
            setCounter(0);
            setNumberString('');
        }
    }

    return (
        <>
            <button onClick={()=>handleClick('add')}>Add Number</button>
            <button onClick={()=>handleClick('reset')}>Reset</button>
            <br></br>
            Numbers: {numberString}
        </>
    )
}