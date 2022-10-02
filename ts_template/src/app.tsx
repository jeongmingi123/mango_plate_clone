import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Circle from "./circle";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
