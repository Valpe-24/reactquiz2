import React, {useState} from "react";

export const AddCalculator = () => {
    let [counter, setCounter] = useState(0);

    const handleClick = (addNumber) => {

        if (addNumber === '1'){
            setCounter(++counter)
        } else if(addNumber ==='2'){
            setCounter(counter += 2)
        }else{
            setCounter(counter+=3)
        }

    }

    return (
        <>
            <button onClick={() => handleClick('1')}>Add 1</button>
            <button onClick={() => handleClick('2')}>Add 2</button>
            <button onClick={() => handleClick('3')}>Add 3</button>
            <br></br>
            Total: {counter} 
        </>
    )
}