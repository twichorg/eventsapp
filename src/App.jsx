import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EventDetail from "./pages/EventDetail";

const App = () => {
  return <>
     <BrowserRouter>               
         <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/event" element={<EventDetail/>} />
         </Routes>
        </BrowserRouter>
  </>
};

export default App;