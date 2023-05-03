import { useCallback } from 'react';
import CountController from '../components/CountController';
import { useAppDispatch } from '../redux/hooks';

const CountControllerContainer = () => {
  const dispatch = useAppDispatch();

  const increment = useCallback(() => {
    dispatch({
      type: 'INCREMENT',
      payload: 5,
    });
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch({
      type: 'DECREMENT',
      payload: 5,
    });
  }, [dispatch]);

  return <CountController increment={increment} decrement={decrement} />;
};

export default CountControllerContainer;
