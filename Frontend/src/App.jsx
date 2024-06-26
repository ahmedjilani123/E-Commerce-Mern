import { useState } from "react";
import Headers from "./pages/navbar/Headers";
import Adds from "./pages/HomePage/Adds";
import SignIn from "./pages/SignRegister/LogIn";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from "./pages/SignRegister/Register";
import Footer from './pages/Footer/footer'
import Product from "./component/product";
function App() {
  return (
    <div>
    <Router>
    <Headers></Headers>
      <Routes>
        <Route path="/" element={<Product/>}></Route>
        <Route path="/Register" element={<SignUp/>}></Route>
        <Route path="/LogIn" element={ <SignIn></SignIn>}></Route>
      </Routes>
      <Footer/>
    </Router>
   
  
  
 
    </div>
  )
}

export default App
