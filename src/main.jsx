import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyComponent from './BT.jsx'
import TodoList from './TodoList.jsx'
// import PizzaOrderingPage from './pizza.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
)
