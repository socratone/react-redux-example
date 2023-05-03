import styled from '@emotion/styled';
import { connect } from 'react-redux';

import ConnectedCountController from '../feature/ConnectedCountController';
import { RootState } from '../redux/store';

type ConnectPageProps = {
  count: number;
};

const StyledBox = styled.div`
  border: 1px solid gainsboro;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ConnectPage: React.FC<ConnectPageProps> = ({ count }) => {
  return (
    <StyledBox>
      <div>Connect Page</div>
      <div>{count}</div>
      <ConnectedCountController />
    </StyledBox>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    count: state.example.count,
  };
};

export default connect(mapStateToProps)(ConnectPage);
