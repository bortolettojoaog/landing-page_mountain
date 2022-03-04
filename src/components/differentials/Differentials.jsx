import React from 'react';

import './Differentials.css';

import Differential from '../differential/Differential';
import Button from '../button/Button';

const Differentials = ({ differentials, icons }) => {
    console.log(icons);

    return (
        <div className="differentials">
            <div className="differentials-container">
                { 
                    differentials.map((diff) => (
                        <div key={ diff.id } className="differentials-box">
                            <Differential>
                                <h1>{ diff.h1 }</h1>
                                <h2>{ diff.h2 }</h2>
                                <p>{ diff.p }</p>
                            </Differential>
                            <Button style={{ borderLeft: '1px solid #ccc' }}>Saiba Mais</Button>
                        </div>
                    )) 
                }
            </div>
        </div>
    );
}
 
export default Differentials;