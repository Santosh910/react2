import React from 'react'
import useCounter from './UseCounter'

const CustomHook = () => {
    const [counter,Increment,Decrement,Reset] = useCounter();
  return (
    <div>
        <h1>counter : {counter}</h1>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>reset</button>
    </div>
  )
}

export default CustomHook