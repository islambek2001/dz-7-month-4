import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactPage from "./pages/contactPage/ContactPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>




        </Routes>
      </BrowserRouter>
  );
}

export default App;