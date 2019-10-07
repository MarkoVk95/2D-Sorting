import { connect } from 'react-redux'
import Footer from './Footer.jsx';
import { changeTheme } from '../../actions/';

const mapStateToProps = (state) => ({
    theme: state.theme
});

const mapDispatchToProps = (dispatch) => ({
    newTheme: (theme) => {dispatch(changeTheme(theme))}
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);