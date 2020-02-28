import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const incriment = () => setCount(count+1)
  const decriment = () => setCount(count-1)

  const incriment2 = () => setCount(previousCount => previousCount + 1)
  const decriment2 = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)

  const double = () => setCount(count*2)

  const divid3 = () => setCount(previousCount => {
    if(previousCount%3 === 0){
      return previousCount/3
    }else{
      return previousCount
    }
  })


  return (
    <>
      <div>
        count:{count}
      </div>
      <div>
        <button onClick={incriment}>+1</button>
        <button onClick={decriment}>-1</button>
      </div>
      <div>
        <button onClick={incriment2}>+1</button>
        <button onClick={decriment2}>-1</button>
      </div>
      <div>
        <button onClick={double}>*2</button>
      </div>
      <div>
        <button onClick={divid3}>3の倍数の時だけ３で割る</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      
    </>
  );
}

export default App
