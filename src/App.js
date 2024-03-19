import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App⭐️</h1>
        <Weather defaultCity="Kyoto" />
        <footer>
          This project was coded by Adriana Cividini and is{" "}
          <a href="https://github.com/AdrianaCividini/revisao-weather-app">
            open-sourced in GitHub.
          </a>
        </footer>
      </header>
    </div>
  );
}
