import Header from "./Components/header/header";
import './app.scss';
import Content from "./Components/content/content";
import {useEffect, useState} from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://63ff64b6571200b7b7dcf348.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      })
  })

  return (
    <div className="wrapper">
      <Header />
      <Content items={items}/>
    </div>
  );
}

export default App;
