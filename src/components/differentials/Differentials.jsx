import React from 'react';

import './Differentials.css';

import Differential from '../differential/Differential';
import Button from '../button/Button';

const scrollToContato = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
};

const Differentials = ({ differentials }) => {
    return (
        <div className="differentials" id="diferenciais">
            <div className="differentials-container">
                {
                    differentials.map((diff) => (
                        <div key={ diff.id } className="differentials-box">
                            <Differential>
                                <h1>{ diff.h1 }</h1>
                                <h2>{ diff.h2 }</h2>
                                <p>{ diff.p }</p>
                            </Differential>
                            <Button style={{ borderLeft: '1px solid #ccc' }} onClick={ scrollToContato }>Saiba Mais</Button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Differentials;