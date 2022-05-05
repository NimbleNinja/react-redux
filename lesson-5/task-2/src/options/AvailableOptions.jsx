import { connect } from 'react-redux';
import Options from './Options';
import { toggleOption } from './options.actions';
import { availableOptionsSelector } from './options.selectors';

const mapState = state => ({
  options: availableOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
