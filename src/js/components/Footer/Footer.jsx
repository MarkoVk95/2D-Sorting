import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme(selectedTheme) {
        const {theme, newTheme} = this.props;
        if(selectedTheme !== theme)
            newTheme(selectedTheme);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark  fixed-bottom py-0">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/MarkoVk95/2D-Sorting">Login</a>
                    </li>
                    <li className="nav-item dropdown dropup">
                        <a className={`nav-link dropdown-toggle`} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Theme
                        </a>
                        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                            <a className={`dropdown-item text-light bg-dark`} href="#" onClick={() => this.changeTheme("white")} >White</a>
                            <a className={`dropdown-item text-light bg-dark`} href="#" onClick={() => this.changeTheme("black")} >Black</a>
                        </div>
                    </li>
                </ul>
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/MarkoVk95/2D-Sorting">Github</a>
                    </li>
                </ul>
            </nav>
        )
    }
} 

Footer.propTypes = {
    theme: PropTypes.string.isRequired,
    newTheme: PropTypes.func.isRequired
};