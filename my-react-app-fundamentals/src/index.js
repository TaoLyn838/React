import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// `{...}` curlies means that we will be getting a specific item, and the name of item must be the same as its file name
import { books } from './books'
// the `export default` allow user to write your own name of import file instead of curlie and item {..<item>..}
// import useDefaultExport from './books'

import Book from './Book'

// const author = 'Jordan Moore'
// const title = 'Interesting Facts For Curious Minds'
// const img = './Images/book-1.jpg'

// Dynamic setup
// const firstBook = {
//   author: 'Jordan Moore',
//   title: 'Interesting Facts For Curious Minds',
//   img: './Images/book-1.jpg',
// }

// // Dynamic setup
// const secondBook = {
//   author: 'James Clear',
//   title: 'Atomic Habits',
//   img: './Images/book-2.jpg',
// }

// Create a list
// const books = [
//   {
//     author: 'Jordan Moore',
//     title: 'Interesting Facts For Curious Minds',
//     img: './Images/book-1.jpg',
//     id: 1,
//   },
//   {
//     author: 'James Clear',
//     title: 'Atomic Habits',
//     img: './Images/book-2.jpg',
//     id: 2,
//   },
// ]

// Lecture#42: Complex Example (My way)
// const findBook = (id) => {
//   const searchBookById = books.find((book) => {
//     if (book.id === id) {
//       return console.log(book)
//     }
//   })
// }

// without using copy operator `[...arr]`, see Book #4
// const BookList = () => {
//   return (
//     <section className="bookList">
//       {books.map((book) => {
//         return <Book book={book} key={book.id} />
//       })}
//     </section>
//   )
// }

const BookList = () => {
  // Lecture#42: Complex Example (Solution)
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  // Prop Drilling
  // const someValue = 'someValue'
  // const passSomvalue = (id) => {
  //   findBook(id)
  // }
  return (
    <>
      <h1 className="webTitle">Amazon best sellers</h1>
      <section className="bookList">
        {/* <EventExample /> */}
        {/* {books.map((book) => { */}
        {books.map((book, index) => {
          return (
            // <Book {...book} key={book.id} someValue={passSomvalue(book.id)} />
            // <Book {...book} key={book.id} getBook={getBook} />
            <Book {...book} key={book.id} number={index} />
          )
        })}
      </section>
    </>
  )
}

// const BookList = () => {
//     <section className="bookList">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       />
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   )
// }

// Three ways to play with `props`
// #1
// const Book = (props) => {
//   // Using statement {...} to import title
//   // const title = 'Interesting Facts For Curious Minds'
//   console.log(props)
//   return (
//     <article className="book">
//       {/* <Image />
//       <Title /> */}
//       {/* <h2> {title} </h2>   */}
//       {/* CORRECT WAY to use statemnet <h4>{6 + 6}</h4> */}
//       {/*  WRONG WAY  <h4>{let x = 5}</h4> */}
//       {/* <Author /> */}
//       {/* <p>{props.job}</p>
//       <p>{props.title}</p>
//       <p>{props.number}</p> */}
//       <img src={props.img} alt={props.title}></img>
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </article>
//   )
// }

// #2
// const Book = (props) => {
//   const { img, title, author } = props
//   return (
//     <article className="book">
//       <img src={img} alt={title}></img>
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// #3
// const Book = ({ img, title, author }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title}></img>
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// // #4: Change from #3 after using list and map()
// const Book = ({ book: { img, title, author } }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title}></img>
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// #5: Change from #4 after using `...` to copy all props, so we that can remove {book: {....}} from props block.
//  Because  `{ book: { img, title, author } }` <=> `const { img, title, author } = props.book`, the copy
//  operator of array `[...arr]` make here NO `book` anymore.
//  Thus, it become this: `img, title, author }` <=> `const { img, title, author } = props`
// const Book = ({ img, title, author }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title}></img>
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// // Lecture#40: Components Feature
// // const Book = ({ img, title, author, someValue}) => {
// const Book = ({ img, title, author, getBook, id }) => {
//   // const displayTitle = () => {
//   //   console.log(title)
//   // }

//   return (
//     <article className="book">
//       <img src={img} alt={title}></img>
//       <h2>{title}</h2>
//       {/* <button onClick={someValue}> click me </button> */}
//       {/* ////////////////////////////////// */}
//       {/* this is not going to work because it only excute once. When you CLICK BUTTON, you can't get book by id!!!*/}
//       {/* <button onClick={getBook(id)}>display title</button> */}
//       {/* Way to fix it: set it as FUNCTION. Then, the get will get call when we click button */}
//       <button onClick={() => getBook(id)}>display title</button>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// hosted image
// const Image = () => {
//   return (
//     <img
//       src="https://m.media-amazon.com/images/I/51Azhu94JlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
//       alt="Interesting Facts For Curious Minds"
//     ></img>
//   )
// }

// // local images
// const Image = () => {
//   return (
//     <img
//       src="./Images/book-1.jpg"
//       alt="Interesting Facts For Curious Minds"
//     ></img>
//   )
// }

// const Title = () => {
//   return <h2>Interesting Facts For Curious Minds</h2>
// }

// const Author = () => {
//   const inlineStyle = { color: '#617d98', fontSize: '0.75rem' }
//   return (
//     // inline style
//     <h4 style={inlineStyle}>Jordan Moore</h4>
//   )
// }

// Create Events
// const EventExample = () => {
//   const inlineStyle = { margin: '1rem 0' }

//   // Event to handle from the input is on change. Without add `onChange()` the
//   //  event will fire everytime user is going to type something in the input
//   const handleFormInput = (e) => {
//     console.log(e.target)
//     console.log(e.target)
//     console.log('handle form input')
//   }

//   const handleButtonClick = () => {
//     alert('handle button click')
//   }

//   const handleFormSubmission = (e) => {
//     // `preventDefault` give user to handle those form submissions ourselves.
//     e.preventDefault()
//     console.log('for submitted')
//   }

//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={(e) => console.log(e.target.value)}
//           style={inlineStyle}
//         />
//         <button type="submit"> submit </button>
//         <div>
//           <button onClick={() => console.log('Chick me')} type="button">
//             Chick me
//           </button>
//         </div>
//       </form>
//     </section>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
