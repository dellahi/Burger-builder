import React from 'react'
import Auxilliary from '../../../hoc/Auxiliary'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return <li><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });
    
    return (
        <Auxilliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Auxilliary>
    )
}

export default orderSummary;