import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class SortingTable extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { array } = this.props;
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
        
        return (
            <div className="container d-flex justify-content-center my-5">
                <svg height="600px" width="1000px">
                    {array.length ? array.map((current, i) => {


                        const x = i === 0 ? startPoint + margin / 2 : (i * width + i * margin + startPoint + margin / 2);
                        const y = (600 - (3 * current));
                        return (
                            <g key={i} transform={`translate(${x},${y})`}>
                                <rect height={current * 3 + "px"} width={width} style={{ fill: 'rgb(173, 216, 230)' }}>

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
    array: PropTypes.array.isRequired
};
