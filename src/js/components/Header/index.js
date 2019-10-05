import Header from './Header.jsx'
import { connect } from 'react-redux'
import { newArray } from '../../actions';

const mapStateToProps = state => ({
    array: state.array
});

const mapDispatchToProps = dispatch => ({
    newArray: (size) => {
        let array = [];
        while (array.length < size) {
            array.push(Math.floor(Math.random() * 999));
        }
        dispatch(newArray(array));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);