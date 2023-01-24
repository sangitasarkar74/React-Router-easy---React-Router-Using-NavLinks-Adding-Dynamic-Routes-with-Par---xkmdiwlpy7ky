import React from "react";
import { Index } from "./Pages/Index";
import { NotFound } from "./Pages/NotFound";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
