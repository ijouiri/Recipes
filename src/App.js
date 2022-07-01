import './App.css';
import Home from "./pages/home";
import Header from "./pages/header"
import { Cuisine } from "./pages/cuisine"

import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/Cuisine/:type' element={<Cuisine />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
