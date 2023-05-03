import styled from '@emotion/styled';
import { memo } from 'react';

type CountControllerProps = {
  increment: (value: number) => void;
  decrement: (value: number) => void;
};

const StyledBox = styled.div`
  border: 1px solid gainsboro;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CountController: React.FC<CountControllerProps> = ({
  increment,
  decrement,
}) => {
  console.log('render CountController!');
  return (
    <StyledBox>
      <button onClick={() => increment(5)} style={{ padding: '1rem' }}>
        Increment 5
      </button>
      <button onClick={() => decrement(5)} style={{ padding: '1rem' }}>
        Decrement 5
      </button>
    </StyledBox>
  );
};

export default memo(CountController);
