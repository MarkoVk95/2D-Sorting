import React, { Component } from 'react'

export default class Header extends Component {
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
                    <li className="nav-item">
                        <button type="button" className="btn btn-outline-success">START</button>
                    </li>
                </ul>
            </nav>
        )
    }
}
