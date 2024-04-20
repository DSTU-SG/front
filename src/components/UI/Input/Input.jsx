import React from 'react';
import classes from './Input.module.scss';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    );
});

export default MyInput;