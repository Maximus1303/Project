import React from 'react';
import classes from './Counter.module.scss'
export const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    const inc = () =>{
        setCounter(counter + 1);
    }
    const dec = () =>{
        setCounter(counter - 1);
    }


    return (
        <div>
            {counter}
            <button className={classes.btn}  onClick={inc}>
                +
            </button>
            <button onClick={dec}>
                -
            </button>
        </div>
    );
};

export default Counter;