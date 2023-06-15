import { useState } from 'react'

const UseStateBasics = () => {
  const val = useState('Hello')[0] // useState is an array with two index, [val, func] => now we at val with is index [0], [val (<- we are here), func]
  const func = useState('Hello')[1] // useState = [val, func] => now we at function with is index [1], [val, func (<- we are here)]

  // Or, you can write like this, useState(0) means set init val = 0
  const [value, fuc] = useState(0)

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h4>You clicked {count}</h4>
      <button type="button" onClick={handleClick}>
        {' '}
        click me{' '}
      </button>
    </div>
  )
}
export default UseStateBasics
