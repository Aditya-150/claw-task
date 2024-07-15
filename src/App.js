import Navigation from "./components/Navigation/Navigation.jsx";
import { Route, Routes } from "react-router-dom";
import Contact from "./routes/Contact/Contact.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "preline/preline";
import Home from "./routes/Home/Home.jsx";
import Book from "./routes/Book/Book.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PrivacyPolicy from "./routes/PrivacyPolicy/PrivacyPolicy.jsx";


export default function App() {
   const location = useLocation();

   useEffect(() => {
     if (window.HSStaticMethods) {
       window.HSStaticMethods.autoInit();
     }
   }, [location.pathname]);
  return (
    <div className="min-h-screen">
      <Navigation />
      <Routes>
          <Route index element={<Home />} />
          <Route path="book" element={<Book />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>
      <Footer />
    </div>
  );
}
