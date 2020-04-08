import React from "react";
import Aux from '../../hoc/Aux';
import './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map((ingredKey)=>{
        return [...Array(props.ingredients[ingredKey])].map((obj,index)=>{
            return <BurgerIngredient key={ingredKey + index} type={ingredKey}/>
        })
    })
        .reduce((array,ele)=>{
            return array.concat(ele)
        }, []);

    if(transformedIngredients.length == 0){
        transformedIngredients = <p> Please start adding ingredients</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {/*<BurgerIngredient type="salad"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="salad"/>*/}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};

export default burger;