import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/rating';
import data from '../data'

function item(props) {
    const products = data.products.find(x => x._id === props.match.params.id);
    if (!products) {
        return (
        <div>Product not found</div>
        )
    }
    return (
        <div>
            <Link to="/">Results</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={products.image} alt={products.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{products.name}</h1>
                        </li>
                        <li>
                            <Rating rating={products.rating} numReviews={products.numReviews}/>
                        </li>
                        <li>
                            Price : £{products.price}
                        </li>
                        <li>
                            Description
                            <p>{products.description}</p>
                        </li>
                    </ul>

                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">£{products.price}</div>
                                </div>
                                <div className="row">
                                    <div> Status</div>
                                    <div>
                                        {products.countInStock> 0? (
                                        <span className="Success">In Stock</span>
                                         ):(
                                        <span className="error">Out of Stock</span>)}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Basket</button>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default item
