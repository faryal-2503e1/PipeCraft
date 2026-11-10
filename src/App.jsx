
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Tutorials from './Pages/Tutorials';
import Contact from './Pages/Contact';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
   <BrowserRouter>
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    <Route path="/product-details" element={<ProductDetails />} />
    <Route path="/tutorials" element={<Tutorials />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

  <Footer />

</BrowserRouter>
  );
}

export default App;
