//ไฟล์นี้เป็นไฟล์หลักของโปรเจค ในการตั้งค่า Route/Re-Render Page Component ต่างๆ
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'  //นามสกุล .jsx ไม่ใส่ก็ได้
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Smartphone from './pages/Smartphon.jsx'
import Tablet from './pages/Tablet.jsx'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wowwowwow" element={<Product />} />
          <Route path="/product/smartphone" element={<Smartphone />} />
          <Route path="/product/table" element={<Tablet />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}