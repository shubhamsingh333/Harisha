import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(10)

    const Increment = ()=>{
        setCount(count+1)
    }
   const  decrement = ()=>{
    setCount(count-1)

   }

    const reset = ()=>{
        setCount(0)
    }
  return (
    <>
    count: {count}

    <button onClick={Increment}>Incremnet</button>
    <button onClick={decrement}>Incremnet</button>
    <button onClick={reset}>Reset</button>


    
    
    </>
  )
}

export default Counter


