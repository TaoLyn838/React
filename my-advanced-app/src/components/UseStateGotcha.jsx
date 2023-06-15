import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setFunction] = useState(0)

  const handleClick = () => {
    // value = value + 1 INCORRECTED!!!!!
    // const updatedValue = value + 1 CORRECT WAY
    // setFunction(value + 1)
    // setFunction((currentValue) => {
    //   return currentValue + 1
    // })

    // setTimeout(() => {
    //   setFunction(value + 1)
    // }, 3000)

    setTimeout(() => {
      setFunction((currentState) => {
        return currentState + 1
      })
    }, 3000)
  }

  return (
    <>
      <h3>value = {value}</h3>
      <button className="btn" type="button" onClick={handleClick}>
        Click to increase value
      </button>
    </>
  )
}
export default UseStateGotcha
