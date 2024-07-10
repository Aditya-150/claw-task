import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About/About.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "preline/preline";


export default function App() {
   const location = useLocation();

   useEffect(() => {
     if (window.HSStaticMethods) {
       window.HSStaticMethods.autoInit();
     }
   }, [location.pathname]);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route index element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
