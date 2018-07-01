import React from 'react';

import mealLogo from '../../assets/images/bigmama.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={mealLogo} alt="MyMeal" />
    </div>
);

export default logo;