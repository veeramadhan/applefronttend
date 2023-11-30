import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Router from "../src/router/Router"

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
