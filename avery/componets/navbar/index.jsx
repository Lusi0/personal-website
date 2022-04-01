
import React from 'react';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-links">
                    <a className="link" id="Avery" href="#">Avery</a>
                    <a className="link" id="Repos" href="/repos">Repos {this.props.repos}</a>
                    <a className="link" id="About" href="#">About</a>
                    <a className="link" id="Contact" href="#">Contact</a>
                    <a className="link" id="Blog" href="#">Blog</a>
                </div>
            </div>
        </div>  

    )   
    }


    