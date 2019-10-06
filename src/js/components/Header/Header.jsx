import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.changeAlgorithm = this.changeAlgorithm.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.sliderRef = React.createRef();
        
    }

    componentDidMount() {
        const { newArray } = this.props;
        newArray(Math.floor((parseInt(this.sliderRef.current.value))));
    }

    handleChange(e) {
        const { newArray } = this.props;
        newArray(Math.floor((parseInt(e.target.value))));
    }

    changeAlgorithm(e) {
        const { started, changeAlgorithm } = this.props;
        if(!started)
        changeAlgorithm(e.target.innerHTML);
    }

    handleStart() {
        const {algorithm, array, setStarted } = this.props;
        if(algorithm && array.length > 0)
            setStarted(true, algorithm, array);

    }

    render() {
        const { algorithm,array, started } = this.props;
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">2D-Sorting</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className={`nav-link ${started && algorithm !== 'Bubble Sort' ? 'text-muted':''} ${algorithm === 'Bubble Sort' ? 'text-danger' : ''}`} onClick={this.changeAlgorithm} href="#">Bubble Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${started && algorithm !== 'Selection Sort'? 'text-muted':''} ${algorithm === 'Selection Sort' ? 'text-danger' : ''}`} onClick={this.changeAlgorithm} href="#">Selection Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${started && algorithm !== 'Merge Sort' ? 'text-muted':''} ${algorithm === 'Merge Sort' ? 'text-danger' : ''}`} onClick={this.changeAlgorithm} href="#">Merge Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${started && algorithm !== 'Quick Sort' ? 'text-muted':''} ${algorithm === 'Quick Sort' ? 'text-danger' : ''}`} onClick={this.changeAlgorithm} href="#">Quick Sort</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item d-flex justify-content-center align-items-center mx-5 text-light">
                        1
                        <input type="range" onChange={this.handleChange} ref={this.sliderRef} defaultValue="165" min="1" max="200" className="slider" id="myRange" />
                        200
                    </li>
                    <li className="nav-item">
                        <button type="button" onClick={this.handleStart} className={`btn btn-outline-danger ${started ? 'disabled': (algorithm && array.length > 0) ? '': 'disabled'}`}>START</button>
                    </li>
                </ul>
            </nav>
        )
    }
}


Header.propTypes = {
    algorithm: PropTypes.string,
    array: PropTypes.array.isRequired,
    started: PropTypes.bool.isRequired,
    newArray: PropTypes.func.isRequired,
    changeAlgorithm: PropTypes.func.isRequired,
    setStarted: PropTypes.func.isRequired
};
