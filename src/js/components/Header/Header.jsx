import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { newArray } = this.props;
        newArray(Math.floor((parseInt(e.target.value))));
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">2D-Sorting</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Bubble Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Selection Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Merge Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Quick Sort</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item d-flex justify-content-center align-items-center mx-5 text-light">
                        0
                        <input type="range" onChange={this.handleChange} min="1" max="100" className="slider" id="myRange" />
                        100
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-outline-danger">START</button>
                    </li>
                </ul>
            </nav>
        )
    }
}


Header.propTypes = {
    newArray: PropTypes.string.isRequired
};
