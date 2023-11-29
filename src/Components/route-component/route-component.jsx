import React from 'react';
import {Route, Routes} from "react-router-dom";

import CartPage from "../../pages/cart/cart-page";
import HomePage from "../../pages/home-page/home-page";
import Layout from "../layout/layout";
import PageNotFound from "../../pages/page-not-found/page-not-found";

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
