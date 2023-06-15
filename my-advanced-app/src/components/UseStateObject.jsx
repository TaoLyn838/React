import { useState } from 'react'

const UseStateObject = () => {
  //   const [name, setName] = useState('Peter')
  //   const [age, setAge] = useState(24)
  //   const [hobby, setHobby] = useState('Read Books')

  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Read Books',
  })

  const updateItem = () => {
    // setName('John')
    // setAge(28)
    // setHobby('Srcam At The Computer')

    // only change name
    // setPerson({ ...person, name: 'John' })
    setPerson({ name: 'John', age: 28, hobby: 'Srcam At The Computer' })
  }

  return (
    <>
      <h2>Use State Object Example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys to {person.hobby}</h3>
      <button className="btn" type="button" onClick={updateItem}>
        Show John
      </button>
    </>
  )
}
export default UseStateObject
