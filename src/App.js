import React from "react";
import "./App.css";
import Header from './header/Header';
import Cards from './cards/Cards';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Cards />
      </main>
    </div>
  );
  
}
export default App;
