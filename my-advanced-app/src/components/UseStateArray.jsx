import React from 'react'
import { data } from '../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  }

  const clearAllItem = () => {
    setPeople([])
  }

  console.log(people)
  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4> {person.name} </h4>
            <button
              type="button"
              onClick={() => removeItem(person.id)}
              style={{ backgroundColor: 'blue' }}
              className="btn"
            >
              Remove item
            </button>
          </div>
        )
      })}
      <button
        type="button"
        onClick={clearAllItem}
        style={{ marginTop: '2rem', color: 'white', backgroundColor: 'red' }}
        className="btn"
      >
        Clear all items
      </button>
    </div>
  )
}
export default UseStateArray
