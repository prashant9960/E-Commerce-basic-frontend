import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ContactProvider } from './context/ContactContext';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList'; 

const App = () => {
  return (
    <ContactProvider>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={
            <div>
              <h1 className="text-white text-2xl mb-4">Contact Us</h1>
              <ContactForm />
              <ContactList />
            </div>
          } />
        </Routes>
      </div>
    </ContactProvider>
  );
};

export default App;
