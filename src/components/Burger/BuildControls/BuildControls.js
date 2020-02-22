import React, { Component } from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';
import controlClass from './BuildControl/BuildControl.module.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Beef', type: 'beef'}
]

// class BuildControls extends Component{
//     render(){
//         return (
//             <div className={classes.BuildControls} ingredients={this.props.ingredients}>
        
//                 {controls.map( ctrl => (
//                     <BuildControl className={controlClass.BuildControl} 
//                                 key={ctrl.label} 
//                                 label={ctrl.label}
//                                 clickLess={() => this.props.reduceHandler(ctrl.type)}
//                                 clickMore={() => this.props.addMoreHandler(ctrl.type)}
//                                 />
//                 )

//             )}
//         </div>
//         )
//     }
// }
const BuildControls = (props) => (
    
    <div className={classes.BuildControls} ingredients={props.ingredients}>
    
        {controls.map( ctrl => (
            <BuildControl 
                className={controlClass.BuildControl} 
                key={ctrl.label} 
                label={ctrl.label}
                clickLess={() => props.reduceHandler(ctrl.type)}
                clickMore={() => props.addMoreHandler(ctrl.type)}
            />)
        )}
        </div>

);

export default BuildControls;