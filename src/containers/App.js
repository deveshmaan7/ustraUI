import React, { Component } from 'react';
import CatagoriesTab from './catagoriesTab';
import ProductList from './productList';
import ViewMore from './viewMore';

class App extends Component {
  render() {
    return (
        <div>
          <CatagoriesTab/>
          <ProductList/>
          <ViewMore/>
        </div>
    );
  }
}

export default App;
