import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img
                src={spinner}
                style={{ width: '300px', margin: 'auto', display: 'block', marginTop: '40px' }}
                alt="Loading" 
            />
        </Fragment>
    )
}

export default Spinner;
