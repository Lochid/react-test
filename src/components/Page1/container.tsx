import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from '../../store/counter';
import Page1 from './Page1';

interface State {
  counter: {
    count: number;
  };
}

const mapStateToProps = ({ counter }: State) => ({
  counter: counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch<{ type: string }>) => {
  return {
    increment: () => dispatch(incrementCounter()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);