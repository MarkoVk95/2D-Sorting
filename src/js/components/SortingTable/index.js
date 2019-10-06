import SortingTable from './SortingTable.jsx';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    array: state.array,
    currentIndex: state.currentIndex,
    sortedIndex: state.sortedIndex,
    swapIndex: state.swapIndex
});

export default connect(mapStateToProps)(SortingTable);