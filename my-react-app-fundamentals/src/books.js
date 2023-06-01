import interestingFacts from './Images/book-1.jpg'
import atomicHabits from './Images/book-2.jpg'
import fairyTale from './Images/book-3.jpg'

export const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: interestingFacts,
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: atomicHabits,
    id: 2,
  },
  { author: 'Stephen King', title: 'Fairy Tale', img: fairyTale, id: 3 },
]

// the `default` export only can have ONE!!!
// export default books
