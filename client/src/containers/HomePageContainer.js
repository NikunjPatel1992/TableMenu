import HomePage from '../pages/HomePage';
import { connect } from 'react-redux';
import { fetchUserDetails } from '../redux/action';

const mapDispatchToProps = {
  fetchUserDetails
}

const mapStateToProps = (state) => {
    return {
      userInfo: state.userDetails.userInfo,
      status: state.status
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
