import styles from './Menu.css'
import React, { Component } from 'react';
import { Col, Button, ButtonGroup } from 'reactstrap';
import logo from '../assets/logo.svg'
import github from '../assets/github.png'


class Menu extends Component {

    constructor (props) {
        super(props);
        this.state = { algoSelected: 1, points: []};
        this.algoClick = this.onAlgoClick.bind(this);
        this.handleNewPoints = this.handleNewPoints.bind(this);
        this.handleNewPoints();
    }

    onAlgoClick(algoSelected) {
        this.setState({ algoSelected });
    }

    handleMenuChange() {
        var post = {algorithm:"", points:[]}
        if(this.state.algoSelected == 1){
            post.algorithm = "astar";
        } else if (this.state.algoSelected == 2){
            post.algorithm = "dijkstra";
        }
        post.points = this.state.points;
        this.props.updateMenu(post);
    }

    handleNewPoints(){
        fetch('/0.1v/randompoints/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        }).then(response => response.json()).then(json => this.setState({ points: json}))
    }
    
    render() {
        return (
            <div className="menu">
                <div className="menuTitle">
                    <img src={logo}/>
                    <h1>Visumap</h1>
                </div>
                <div className="menuText">
                    <p>Visumap is an illustrator for single-source shortest path problem using openstreetmap data in visualisation.</p>
                </div>
                <div className="space"></div>
                <div className="menuAlgorithms">
                    <h6>Algorithm</h6>
                    <ButtonGroup>
                        <Button color="primary" onClick={() => this.onAlgoClick(1)} active={this.state.algoSelected === 1}>Astar</Button>
                        <Button color="primary" onClick={() => this.onAlgoClick(2)} active={this.state.algoSelected === 2}>Dijkstra</Button>
                    </ButtonGroup>
                </div>
                <div className="space"></div>
                <div className="submit">
                    <Button color="primary" size="m" block onClick={() => this.handleMenuChange()}>Vizualise</Button>
                    <Button color="primary" size="m" block onClick={() => this.handleNewPoints()}>Get new points</Button>
                </div>

                <div className="bottom">
                    <img src={github}/>
                </div>
            </div>
        );
    }
}

export default Menu;