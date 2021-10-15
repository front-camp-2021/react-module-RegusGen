import React from "react";
import './App.css';
import Main from "./components/main/main";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="store">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
