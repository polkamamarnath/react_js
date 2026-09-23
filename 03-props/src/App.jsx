// import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user='Amarnath' age={18} img='https://images.unsplash.com/photo-1789700588149-7d4a5f770236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'desc='Associate Product Engineer'/>
      <Card user='Polkam' age={21} img='https://images.unsplash.com/photo-1774673794396-a33112010d61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8' desc='Software Engineer'/>
    </div>
  )
}

export default App
