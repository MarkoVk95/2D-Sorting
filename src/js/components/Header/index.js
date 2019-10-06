import Header from './Header.jsx'
import { connect } from 'react-redux'
import { newArray, changeAlgorithm, setStarted, resetSortedArray, resetSwapArray } from '../../actions';
import { bubbleSort } from '../../sort'
const mapStateToProps = state => ({
    array: state.array,
    algorithm: state.algorithm,
    started: state.started
});

const mapDispatchToProps = dispatch => ({
    newArray: (size) => {
        let array = [];
        while (array.length < size) {
            array.push(Math.floor(Math.random() * 200));
        }
        dispatch(resetSortedArray());
        dispatch(newArray(array));
    },
    changeAlgorithm: (algorithm) => {
        dispatch(changeAlgorithm(algorithm));
    },
    setStarted: (started, algorithm, array) => {
        dispatch(resetSortedArray());
        dispatch(resetSwapArray());
        dispatch(setStarted(started));
        switch (algorithm) {
            case "Bubble Sort":
                bubbleSort(array, dispatch);
                break;
            default:
                    dispatch(setStarted(false));
                break;
        }
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);