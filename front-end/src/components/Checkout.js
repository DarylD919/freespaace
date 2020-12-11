import React from 'react'

function Checkout(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active': ''}>Sign in</div>
            <div className={props.step2 ? 'active': ''}>Shipping</div>
            <div className={props.step3 ? 'active': ''}>Payemnt</div>
            <div className={props.step4 ? 'active': ''}>Place order</div>
            
        </div>
    )
}

export default Checkout
