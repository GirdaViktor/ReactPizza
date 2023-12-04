import {createContext, useState} from "react";

import RouteComponent from "./Components/RouteComponent/RouteComponent";

import './app.scss';

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
          <RouteComponent />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
