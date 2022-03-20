import React from "react";
import Register from "./Components/Register/Register";
import Container from "./Components/Table/Table";
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Register />
      <Container />
      <Footer/>
    </div>
  );
}

export default App;
