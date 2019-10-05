import Header from './Header.jsx'
import { connect } from 'react-redux'
import { newArray, changeAlgorithm } from '../../actions';

const mapStateToProps = state => ({
    array: state.array,
    algorithm: state.algorithm
});

const mapDispatchToProps = dispatch => ({
    newArray: (size) => {
        let array = [];
        while (array.length < size) {
            array.push(Math.floor(Math.random() * 999));
        }
        dispatch(newArray(array));
    },
    changeAlgorithm: (algorithm) => {
        dispatch(changeAlgorithm(algorithm));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);