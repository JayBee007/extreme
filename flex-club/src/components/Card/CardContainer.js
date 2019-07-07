import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 30rem;
  height: 40rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 0.7rem;
  box-shadow: ${({ isSelected }) =>
    isSelected
      ? '4px 4px 3px 1px rgba(0, 0, 0, 0.3)'
      : '2px 2px 3px 1px rgba(0, 0, 0, 0.25)'};
  transition: all 0.1s linear;
  transform: ${({ isSelected }) => (isSelected ? 'translateY(-0.4rem)' : null)};
  &:hover {
    transform: translateY(-0.4rem);
    box-shadow: 4px 4px 3px 1px rgba(0, 0, 0, 0.3);
  }
`;

export default CardContainer;
