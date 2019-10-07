import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class SortingTable extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { array, theme } = this.props;
        const width = array.length > 100 ? 4 :
            array.length > 50 ? 8 :
                array.length > 10 ? 16 : 80;
        const margin = array.length > 100 ? 1 :
            array.length > 50 ? 2 :
                array.length > 10 ? 4 : 20;
        const bracket = array.length > 100 ? 200 :
            array.length > 50 ? 100 :
                array.length > 10 ? 50 : 10;

        let startPoint = (1000/bracket)*((bracket-array.length)/2);
        
        const {currentIndex, sortedIndex, swapIndex} = this.props;

        return (
            <div className="container-fluid d-flex justify-content-center py-5" style={{background: theme }}>
                <svg height="600px" width="1000px">
                    {array.length ? array.map((current, i) => {
                        const x = i === 0 ? startPoint + margin / 2 : (i * width + i * margin + startPoint + margin / 2);
                        const y = (600 - (3 * current));
                        const rgb = swapIndex.includes(i) ? 'rgb(213, 173, 230)' :
                                         currentIndex.includes(i) ? 'rgb(255, 165, 0)' :
                                         sortedIndex.includes(i) ? 'rgb(0, 128, 0)' : 'rgb(173, 216, 230)' ;
                        return (
                            <g key={i} transform={`translate(${x},${y})`}>
                                <rect height={current * 3 + "px"} width={width} style={{ fill: rgb }}>

                                </rect>
                            </g>
                        )
                    }) : null}
                </svg>
            </div>
        )
    }
}

SortingTable.propTypes = {
    array: PropTypes.array.isRequired,
    currentIndex: PropTypes.array.isRequired,
    swapIndex: PropTypes.array.isRequired,
    sortedIndex: PropTypes.array.isRequired,
    theme: PropTypes.string.isRequired
};
