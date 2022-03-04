import React from 'react';
import { useState } from 'react';
import { CgBulb, CgData, CgCoffee } from 'react-icons/cg';

import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Differentials from './components/differentials/Differentials';

const App = () => {
    const [differentials, setDifferentials] = useState([
        {
            id: '1',
            h1: <CgBulb />,
            h2: 'Differential #1',
            p: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quae esse laboriosam hic tempora qui.',
        },
        {
            id: '2',
            h1: <CgData />,
            h2: 'Differential #2',
            p: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quae esse laboriosam hic tempora qui.',
        },
        {
            id: '3',
            h1: <CgCoffee />,
            h2: 'Differential #3',
            p: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quae esse laboriosam hic tempora qui.',
        },
    ]);

    return (
        <div className="app-container">
            <Header />
            <Differentials differentials={ differentials } />
            <Footer />
        </div>
    );
}
 
export default App;