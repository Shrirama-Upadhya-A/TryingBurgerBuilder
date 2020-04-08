import React from "react";
import Aux from '../../../hoc/Aux';
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const buildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price : <strong>{props.currentPrice.toFixed(2)}</strong></p>
            {controls.map((control) => {
                return <BuildControl
                    key={control.label}
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    disabled={props.disabled[control.type]}/>
            })}
            <button
                onClick={props.ordered}
                className="OrderButton"
                disabled={!props.purchasable}>ORDER NOW
            </button>
        </div>
    );
};
export default buildControls;