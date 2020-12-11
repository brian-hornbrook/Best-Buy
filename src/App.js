import React from 'react'
import Navbar from './components/navbar/navbar'
import Greeting from './components/greeting/greeting'
import Sale from './components/sale/Sale'
import './style.css'


function App() {
  return (
    <div>

      {/* navbar */}
      <Navbar />

      {/* greeting */}
      <Greeting />

      {/* sale */}
      <Sale />

    </div>
  );
}

export default App
