import React from "react";
import { Helmet } from "react-helmet";
import { Navbar, Welcome, Footer, Services } from "./components";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>HyperFile</title>
      </Helmet>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Footer />
      <footer />
    </div>
  );
};

export default App;
