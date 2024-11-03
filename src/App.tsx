import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './assets/globalStyles';
import theme from './assets/theme'
import Header from './components/Header/Header'
import ProductListing from "./components/ProductListing/ProductListing";
import { data } from "./data/data";
import { FilterProvider } from "./FilterProvider";
import Filters from './components/Filters/Filters'
import Search from './components/Search/Search';

function App() {
  return (
    <ThemeProvider theme = { theme }>
      <FilterProvider>
        <Header />
        <Search />
        <Filters />
        <ProductListing products = { data } />
      </FilterProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
