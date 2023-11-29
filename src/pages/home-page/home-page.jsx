import React from 'react';
import {useEffect, useState} from "react";
import Content from "../../Components/content/content";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://63ff64b6571200b7b7dcf348.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      })
  })

  return (
    <Content items={items} isLoading={isLoading} />
  );
};

export default HomePage;
