import React, { useState, useEffect } from 'react'

const App = props => {
  const [state,setState] = useState(props)
  
  useEffect(()=>{
    console.log('This is like componentDidMount or componentDidUpdate')
  })

  useEffect(()=>{
    console.log('This is like componentDidMount')
  },[])

  useEffect(()=>{
    console.log('This callback is for name only.')
  },[state.name])

  return (
    <>
      <p>現在の{state.name}は、{state.price}円です。</p>
      <button onClick={() => setState({...state, price: state.price+1})}>+1</button>
      <button onClick={() => setState({...state, price: state.price-1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={state.name} onChange={e=>setState({...state, name:e.target.value})}/>
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
