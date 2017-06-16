import styles from './Menu.css'
import React, { Component } from 'react';
import { Col } from 'reactstrap';


class Menu extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div className="menu">
                <h1>Visumap</h1>
            </div>
        );
    }
}

export default Menu;