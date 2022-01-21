import React from "react";
// import { BrowserRouter } from "react-router-dom";
import styled from "styled-components"
// import Header from "./components/Header";
// import Router from "./routes/Router"
import LoteriasPage from "./pages/LoteriasPage"

const ContainerApp = styled.div`
`

const App = () => {
  
  return (
    <ContainerApp>
      <LoteriasPage/>
    </ContainerApp>
  );
}


export default App;
