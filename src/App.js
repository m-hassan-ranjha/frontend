import React from "react";
import "./App.css";
import SignUp from "./components/signup/signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/signin/signin";
import Home from "./components/Home";
import UpdatePassword from "./components/update_pass/update_pass";
import ForgotPassword from "./components/forgot_pass/reset_pass";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App"></div>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signin" element={<SignIn />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/update_pass" element={<UpdatePassword />}></Route>
        <Route
          exact
          path="/forgot_password"
          element={<ForgotPassword />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
