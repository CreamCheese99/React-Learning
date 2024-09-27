import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Profile from './conponents/Profile'
import Products  from './conponents/Products'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    alert('Hello World');
  }

  function updateState() {
    setCount(count + 1);
  }

  function decreaseState() {
    setCount(count - 1);
  }

  const user = {
    name : 'John Doe',
    imageUrl : 'https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

  return (
    <>
      <h3>Count is : {count} </h3>
      <button onClick={updateState}>Update state</button>
      <button onClick={decreaseState}>Decrease state</button>
      <Profile data={user}/>
      <Products />
      <button onClick={handleClick}>Say hi!</button>
    </>
  )
}

export default App
