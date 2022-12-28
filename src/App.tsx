import React from "react";
import CreateUser from "./pages/CreateUser";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ActivateUser from "./pages/ActivateUser";
import LoginUser from "./pages/LoginUser";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/createuser" element={<CreateUser />} />
    <Route path="/" element={<Home />} />
    <Route path="/activateuser/:token" element={<ActivateUser />} />
    <Route path="/loginuser"  >
      <Route index element={<LoginUser />}/>
      <Route path=":info" element={<LoginUser />} />
    </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
