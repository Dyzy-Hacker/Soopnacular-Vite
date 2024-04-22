import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeDesc from "./components/HomeDesc";
import Footer from "./components/Footer";
import { cardData, descriptions } from "./constant";

import { About, Services, Pricing, Contact, ContactInfo } from "./pages";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  const [selectedRecipeIngredients, setSelectedRecipeIngredients] =
    useState(null);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setSelectedRecipeIngredients={setSelectedRecipeIngredients}
              />
            }
          />
          {/* Namesto name id da mu kla !!! */}
          <Route path="info/:name" element=<HomeDesc data={descriptions} /> />
          <Route
            path="/about/:id"
            element={
              <About
                setSelectedRecipeIngredients={setSelectedRecipeIngredients}
              />
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element=<Contact data={cardData} /> />
          <Route
            path="/contact/:name"
            element=<ContactInfo data={cardData} />
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
