import './App.css'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import {Routes, Route} from "react-router-dom" 
import Product from './components/Product'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App"> 
    <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} /> 
        <Route path="/products/:id" element={<Product/>} /> 
      </Routes>
    </div>
  )
}

export default App
