import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: ${({ paddingTop }) => paddingTop || 0};
`;

export default FlexRow;
