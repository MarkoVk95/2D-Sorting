import SortingTable from './SortingTable.jsx';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    array: state.array
});

export default connect(mapStateToProps)(SortingTable);