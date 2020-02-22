import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>
            {props.label}
        </div>
        <button className={classes.Less} onClick={props.clickLess}>Less</button>
        <button className={classes.More} onClick={props.clickMore}>More</button>
    </div>
);

export default buildControl;