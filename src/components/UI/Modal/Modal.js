import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const modal = (props) => {
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'tanslateY(-100vh)',
                    display: props.show ? 'block' : 'none'
                }}
            >
                {props.children}
            </div>
        </Aux>
    );
    
}

export default modal;