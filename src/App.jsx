import React from 'react';
import { useState } from 'react';
import { CgBulb, CgData, CgCoffee } from 'react-icons/cg';

import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Differentials from './components/differentials/Differentials';

const App = () => {
    const [differentials] = useState([
        {
            id: '1',
            h1: <CgBulb />,
            h2: 'Guias Especializados',
            p: 'Nossa equipe é formada por montanhistas certificados, com anos de experiência nas rotas que você vai percorrer — da logística ao resgate.',
        },
        {
            id: '2',
            h1: <CgData />,
            h2: 'Rotas Monitoradas',
            p: 'Condições climáticas, nível de dificuldade e status de cada trilha são acompanhados em tempo real para manter sua expedição segura.',
        },
        {
            id: '3',
            h1: <CgCoffee />,
            h2: 'Suporte Completo',
            p: 'Hospedagem, equipamentos e refeições incluídos em cada pacote, para você focar só em chegar ao topo.',
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