import React from 'react';
import ReactDOM from 'react-dom/client'

function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    )
}

const Person = () => <h2>John Doe</h2>;
const Message = () => {
    return <h2>this is my message</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<Greeting/>)