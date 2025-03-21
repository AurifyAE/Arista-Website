import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AllProducts from './pages/AllProducts';
import ViewProduct from './pages/ViewProduct';
import BullionShowcase from './pages/BullionShowcase';
import { SpotRateProvider } from "./context/SpotRateContext";
import Service1 from './components/services/service1/Service1';
import Service2 from './components/services/service2/Service2';
import Service3 from './components/services/service3/Service3';
import Service4 from './components/services/service4/Service4';
import Service5 from './components/services/service5/Service5';
import Service6 from './components/services/service6/Service6';
import Service7 from './components/services/service7/Service7';
import Service8 from './components/services/service8/Service8';


const App = () => {
  return (
    <SpotRateProvider>
      <Router>
        <Header />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/Physical-Precious-Metal-Trading" element={<Service1 />} />
            <Route path="/services/Precious-Metal-Consignment-Financing" element={<Service2 />} />
            <Route path="/services/Hedging-and-Risk-Management" element={<Service3 />} />
            <Route path="/services/Secure-Precious-Metal-Delivery-Worldwide" element={<Service4 />} />
            <Route path="/services/Global-Metal-Transfer-Swap" element={<Service5 />} />
            <Route path="/services/Assay-Services" element={<Service6 />} />
            <Route path="/services/Refinery-Services" element={<Service7 />} />
            <Route path="/services/Storage-and-Vaulting-Services" element={<Service8 />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/product-details" element={<ViewProduct />} />
            <Route path="/bullions" element={<BullionShowcase />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </SpotRateProvider>
  );
};

export default App;
