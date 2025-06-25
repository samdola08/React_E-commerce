import React, { Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";

const Home = React.lazy(() => import("./Pages/Home/index"));
const Listing = React.lazy(() => import("./Pages/Listing"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<Listing />} />{" "}
        
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
