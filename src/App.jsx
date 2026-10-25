//ไฟล์นี้จะเป็นไลฟ์หลักของโปรเจค ในการตั้งค่า Route / Re-Render Page Component ต่างๆ
import { BrowserRouter, Routes , Route } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Smartphone from './pages/Smartphone'
import Tablet from './pages/Tablet'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/WOWWOWWOW" element={<Product/>} />
          <Route path="/Product/Smartphone" element={<Smartphone/>} />
          <Route path="/Product/tablet" element={<Tablet/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}