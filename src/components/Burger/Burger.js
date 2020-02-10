import React, { Component } from "react";

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import Aux from '../../hoc/Aux';

class Burger extends Component {

    // take the object, transform it as list and loop through all the keys
    // for each key, find them in the dic and loop through its value
    // reduce method is for flatten an array. Transform an array of array to single array
    transformedIngredients = Object.keys(this.props.ingredients)
        .map(IgKey => {
            console.log(IgKey);
            return [...Array(this.props.ingredients[IgKey])].map((_, i) => {
                return <BurgerIngredient key={IgKey+i} type={IgKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    
    //     console.log(transformedIngredients.length);
    // if (transformedIngredients.length === 0) {
    //     transformedIngredients = <p>Please start adding ingredients.</p>
    // };
    
    render(){
        if (this.transformedIngredients.length === 0) {
            this.transformedIngredients = <p>Please start adding ingredients.</p>
        };
        return (
            <Aux>
                <div className={classes.Burger}>
                    <BurgerIngredient type="bread-top"/>
                    {this.transformedIngredients}
                    <BurgerIngredient type="bread-bottom"/>
                </div>
            </Aux>
           

        );
    }
}

export default Burger;