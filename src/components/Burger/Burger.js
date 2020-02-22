import React from "react";
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) =>  {

    // take the object, transform it as list and loop through all the keys
    // for each key, find them in the dic and loop through its value
    // reduce method is for flatten an array. Transform an array of array to single array
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients.</p>
        }

        return (
                <div className={classes.Burger}>
                    <BurgerIngredient type="bread-top"/>
                    {transformedIngredients}
                    <BurgerIngredient type="bread-bottom"/>
                </div>
        );
}

export default Burger;