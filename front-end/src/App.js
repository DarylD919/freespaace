import React from 'react';
import data from './data';

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
                <div key={products._id} className="card">
                    <a href={`/product/${products._id}`}>

                        <img className= "medium" src={products.image} alt={products.name} />
                    </a>
                    <div className="card-body">
                    <a href={`/product/${products._id}`}>
                            <h2>{products.name}</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i> </span>
                        </div>
                        <div className="price">
                          £{products.price}
                        </div>
                    </div>
                </div>
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
