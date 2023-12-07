import React from 'react';
import { Route, Routes } from "react-router-dom";

import CartPage from "../../Pages/CartPage/CartPage";
import HomePage from "../../Pages/HomePage/HomePage";
import Layout from "../Layout/layout";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Route>
    </Routes>
  );
};

export default RouteComponent;
