import styled from 'styled-components';

const Text = styled.p`
  font-size: ${({ smallText }) => (smallText ? '1.8rem' : '2.8rem')};
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default Text;
