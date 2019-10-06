import Header from './Header.jsx'
import { connect } from 'react-redux'
import { newArray, changeAlgorithm, setStarted } from '../../actions';

const mapStateToProps = state => ({
    array: state.array,
    algorithm: state.algorithm,
    started: state.started
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
    },
    setStarted: (started) => {
        dispatch(setStarted(started));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);