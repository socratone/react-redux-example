import styled from '@emotion/styled';
import CountControllerContainer from '../feature/CountControllerContainer';
import { useAppSelector } from '../redux/hooks';

const StyledBox = styled.div`
  border: 1px solid gainsboro;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HooksPage = () => {
  const count = useAppSelector((state) => state.example.count);

  return (
    <StyledBox>
      <div>Hooks Page</div>
      <div>{count}</div>
      <CountControllerContainer />
    </StyledBox>
  );
};

export default HooksPage;
