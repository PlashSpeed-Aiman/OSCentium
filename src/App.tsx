import { useState } from 'react'
// @ts-ignore
import NavBar from './components/navbar.jsx'
import LoginPage from "./components/login/login"
import HomePage from "./components/home/home"
import './App.css'
import { HashRouter as Router,Route} from "react-router-dom";

function App() {

  return (
    <>
      <NavBar />
      <div>
        <HomePage />
      </div>
    </>
  )
}

export default App
