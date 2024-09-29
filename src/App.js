import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import Login from "./pages/Accounts/Login/Login";
import Error404 from "./pages/404/Error404";
import Search from "./pages/Search/Search";
import About from "./pages/About/About";
import Singup from "./pages/Accounts/Singup/Singup";
import Account from "./pages/Accounts/Account/Account";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/accounts/login" element={<Login />}></Route>
        <Route path="/accounts/singup" element={<Singup />}></Route>
        <Route path="/accounts/account" element={<Account />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/map" element={<Search />}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
