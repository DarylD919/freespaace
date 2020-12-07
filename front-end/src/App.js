import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Item from './Pages/item';

function App() {
  return (
      <BrowserRouter>
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
            <Route path="/product/:id" component={Item}></Route>
            <Route path="/" component={Home} exact></Route>
        </main>

        <footer className="row center">
            All rights reserved 
            Created By Daryl Darilag
        </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
