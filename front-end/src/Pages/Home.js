import React from 'react'
import data from '../data';
import Product from '../components/product';

function Home() {
    return (
        <div className="row center">
        {data.products.map((products) => (
            <Product key={products.id} products={products}></Product>
        ))
      }
          </div>
    )
}

export default Home
