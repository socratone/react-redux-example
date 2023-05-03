import { connect } from 'react-redux';
import CountController from '../components/CountController';
import { Dispatch } from 'redux';
import { ExampleAction } from '../redux/exampleReducer';
import { RootState } from '../redux/store';

type ConnectedCountControllerProps = {
  increment: (payload: number) => void;
  decrement: (payload: number) => void;
};

const ConnectedCountController: React.FC<ConnectedCountControllerProps> = ({
  increment,
  decrement,
}) => {
  return <CountController increment={increment} decrement={decrement} />;
};

const mapStateToProps = (state: RootState) => {
  return {
    count: state.example.count,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ExampleAction>) => {
  return {
    increment: (payload: number) => dispatch({ type: 'INCREMENT', payload }),
    decrement: (payload: number) => dispatch({ type: 'DECREMENT', payload }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedCountController);
