import { useState } from "react";

export default function Counter (props){

    
    const [counter, setCounter] = useState(0)
  
    const add = () => {
      setCounter(counter + 1)
    }
    const reset = () => {
      setCounter(0)
    }
    const substract = () => {
      setCounter(counter - 1)
    }
  
    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{counter}</h3>
            <button onClick={substract}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={add}>+</button>
  </div>
    )


}