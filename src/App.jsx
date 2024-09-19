import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ReactUseState from './component/ReactUseState'
import Navbar from './component/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import DarkMode from './component/DarkMode'
import UseStateUsingArray from './component/UseStateUsingArray'
import ApiFetching from './component/ApiFetching'
function App() {
  return (
    
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ReactUseState/>}></Route>
      <Route path='/BackGroundChanger' element={<DarkMode/>}></Route>
      <Route path='/useStateWithArray' element={<UseStateUsingArray/>}></Route>
      <Route path='/apiFetching' element={<ApiFetching/>}></Route>
    </Routes>
    </Router>
    
    
    </>
  )
}

export default App
