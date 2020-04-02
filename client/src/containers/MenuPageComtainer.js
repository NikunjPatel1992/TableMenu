import MenuPage from '../pages/MenuPage';
import { connect } from 'react-redux';
import { fetchMenu } from '../redux/action';

const mapDispatchToProps = {
    fetchMenu
}

const mapStateToProps = (state) => {
    return {
    //   menuInfo: state.menu.menuInfo,
    //   status: state.menu.status
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuPage);
