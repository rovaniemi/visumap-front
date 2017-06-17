import styles from './Menu.css'
import React, { Component } from 'react';
import { Col, Button, ButtonGroup } from 'reactstrap';
import logo from '../assets/logo.svg'
import github from '../assets/github.png'


class Menu extends Component {

    constructor (props) {
        super(props);
        this.state = { algoSelected: 1, citySelected: 1 };
        this.algoClick = this.onAlgoClick.bind(this);
        this.cityClick = this.onCityClick.bind(this);
    }

    onAlgoClick(algoSelected) {
        this.setState({ algoSelected });
    }

    onCityClick(citySelected) {
        this.setState({ citySelected });
    }

    random(){

    }

    handleMenuChange() {
        var post = {algorithm:"", sLat:0, sLon:0, gLat:0, gLon:0, city:""}
        
        if(this.state.algoSelected == 1){
            post.algorithm = "astar";
        } else if (this.state.algoSelected == 2){
            post.algorithm = "dijkstra";
        } else {
            post.algorithm = "bfs";
        }

        if(this.state.citySelected == 4){
            post.sLat = Math.random() * (65.8612 - 65.8087) + 65.8087;
            post.sLon = Math.random() * (24.2152- 24.0916) + 24.0916;
            post.gLat = Math.random() * (65.8612 - 65.8087) + 65.8087;
            post.gLon = Math.random() * (24.2152- 24.0916) + 24.0916;
            post.city = "tornio";
        }

        this.props.updateMenu(post);
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
                <div className="menuCity">
                    <h6>Choose City</h6>
                    <ButtonGroup>
                        <Button color="primary" onClick={() => this.onCityClick(1)} active={this.state.citySelected === 1}>Helsinki</Button>
                        <Button color="primary" onClick={() => this.onCityClick(2)} active={this.state.citySelected === 2}>Rovaniemi</Button>
                        <Button color="primary" onClick={() => this.onCityClick(3)} active={this.state.citySelected === 3}>Ivalo</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="primary" onClick={() => this.onCityClick(4)} active={this.state.citySelected === 4}>Tornio</Button>
                        <Button color="primary" onClick={() => this.onCityClick(5)} active={this.state.citySelected === 5}>Turku</Button>
                    </ButtonGroup>
                </div>
                <div className="space"></div>
                <div className="menuAlgorithms">
                    <h6>Algorithm</h6>
                    <ButtonGroup>
                        <Button color="primary" onClick={() => this.onAlgoClick(1)} active={this.state.algoSelected === 1}>Astar</Button>
                        <Button color="primary" onClick={() => this.onAlgoClick(2)} active={this.state.algoSelected === 2}>Dijkstra</Button>
                        <Button color="primary" onClick={() => this.onAlgoClick(3)} active={this.state.algoSelected === 3}>Bfs</Button>
                    </ButtonGroup>
                </div>
                <div className="space"></div>
                <div className="submit">
                    <Button color="primary" size="m" block onClick={() => this.handleMenuChange()}>Vizualise</Button>
                    <Button color="primary" size="m" block>Get new points</Button>
                </div>

                <div className="bottom">
                    <img src={github}/>
                </div>
            </div>
        );
    }
}

export default Menu;