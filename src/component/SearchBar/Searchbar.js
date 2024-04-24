import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Searchbar extends Component {
    state = {
        keyword: ''
    }

    inputHandler = (val) => (
        this.setState({keyword: val})
    );

    render() {
        return (
            <div>
                <svg id="ca" xmlns="http://www.w3.org/2000/svg" className="equilizer" viewBox="0 0 128 128">
                    <g>
                        <title>Audio Equilizer</title>
                        <rect className="bar" transform="translate(0,0)" y="15"></rect>
                        <rect className="bar" transform="translate(25,0)" y="15"></rect>
                        <rect className="bar" transform="translate(50,0)" y="15"></rect>
                        <rect className="bar" transform="translate(75,0)" y="15"></rect>
                        <rect className="bar" transform="translate(100,0)" y="15"></rect>
                    </g>
                </svg>
                <br/><br/>
                <input type="text" onChange={(e) => this.inputHandler(e.target.value)} name='search'
                       placeholder="Type To Search..."/>
                <Link to={'/search/' + this.state.keyword}><br/><br/>
                    <button className="search">Search</button>
                </Link>
            </div>
        );
    }
}

export default Searchbar;