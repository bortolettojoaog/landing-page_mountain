import React from 'react';

import './Header.css';

import Button from '../button/Button';

const Header = () => {
    return (
            <>
                <div className="header-container">
                    <div className="overlay"></div>

                    <div className="header-center">
                        <div className="header-logo">
                            <a href=""><img src="/images/logo.png" alt="" title="" /></a>
                        </div>

                        <nav className="header-navbar">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">News</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="body-container">
                    <div className="body-center">
                        <div className="body-text">
                            <h2>Explore 15k</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis harum fugit tenetur esse dolore, voluptates possimus ratione, quisquam odio magnam minima perferendis quo necessitatibus quasi dolorum suscipit. Totam, quaerat! Qui culpa reiciendis totam iste obcaecati omnis cumque ad odit earum, at quaerat minus sequi distinctio ea neque similique tempore?</p>
                            <div className="body-button">
                                <Button>View Tours</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}
 
export default Header;