import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../Burger/Burger';
import BuildControls from "../Burger/BuildControls/BuildControls";
import classes from '../Burger/BuildControls/BuildControls.module.css';
import { object } from "prop-types";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            beef: 0,
        },
        totalPrice: 4,
        purchasable: false
    }

    // check if there are ingredients in the burger. If not, then cannot order
    updatePurchaseState(ingredients) {
        const sum_original = Object.keys(ingredients);
        console.log(sum_original);

        // turn the object to be an array
        const sum = Object.keys(ingredients)
                .map(igKey => {
                    return ingredients[igKey];
                })
                .reduce((sum, el) => {
                    return sum + el;
                }, 0);
            this.setState({purchasable: sum > 0});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        const updatedCount = oldCount - 1;
        let updatedPrice = oldPrice;
        const updatedIngredients = {...this.state.ingredients};
        if(updatedCount >= 0){
            updatedIngredients[type] = updatedCount;
            updatedPrice = oldPrice - INGREDIENT_PRICES[type];
            
        }else{
            updatedIngredients[type] = 0;
        }
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        const updatedCount = oldCount + 1;
        const updatedPrice = oldPrice + INGREDIENT_PRICES[type];
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        this.updatePurchaseState(updatedIngredients);
    }


    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>

                <p>Current Price: {this.state.totalPrice.toFixed(2)}</p>
                <BuildControls 
                    className={classes.BuildControls}
                    ingredients={this.state.ingredients}
                    reduceHandler={this.removeIngredientHandler}
                    addMoreHandler={this.addIngredientHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
                <button 
                className={classes.OrderButton}
                disabled={!this.state.purchasable}>ORDER NOW</button>
            </Aux>
        );
    }
}

export default BurgerBuilder;