import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorExample from './components/ErrorExample.jsx'
import UseStateBasics from './components/UseStateBasics.jsx'
import UseStateArray from './components/UseStateArray.jsx'
import UseStateObject from './components/UseStateObject.jsx'
import UseStateGotcha from './components/UseStateGotcha.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseStateGotcha />
  </React.StrictMode>
)
