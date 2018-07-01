import React from 'react';

import classes from './Meal.css';
import MealIngredient from './MealIngredient/MealIngredient';

const meal = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <MealIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Meal}>
            <MealIngredient type="bread-top" />
            {transformedIngredients}
            <MealIngredient type="bread-bottom" />
        </div>
    );
};

export default meal;