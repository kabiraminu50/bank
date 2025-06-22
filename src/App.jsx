import Header from './assets/component/Header/header'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './assets/component/Hero/hero'
import { Routes,Route, BrowserRouter} from 'react-router-dom'
import Transfer from './assets/pages/Transfer'
import { Link } from 'react-router-dom'
import Home from './assets/pages/Home/home'
function App() {


  return (<div>
<BrowserRouter>
<Routes>
  <Route path='/transfer' element={<Transfer/>}/>

</Routes>
</BrowserRouter>


  </div>


  )
}
export default App
