import React from 'react';
import data from './data';
import Product from './components/product';

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">FreeSpace</a>
            </div>
            <div>
                <a href="/signin">Sign In</a>
                <a href="/basket">Basket</a>
            </div>
        </header>

        <main>
            <div className="row center">
            {data.products.map((products) => (
                <Product key={products.id} products={products}></Product>
            ))
          }
              </div>
        </main>

        <footer className="row center">
            All rights reserved 
            Created By Daryl Darilag
        </footer>
    </div>

  );
}

export default App;
