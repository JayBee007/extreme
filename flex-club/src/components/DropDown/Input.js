import styled from 'styled-components';

const onAttention = '&:hover, &:focus';

const Input = styled.input`
  display: inline-block;
  font-size: 1.6rem;
  width: 100%;
  word-wrap: break-word;
  outline: 0;
  white-space: normal;
  min-height: 2em;
  padding: 1em 2em 1em 1em;
  color: ${props => props.theme.colors.secondary};
  box-shadow: none;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 0.7rem;
  transition: box-shadow 0.1s ease;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? 0 : '0.7rem')};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? 0 : '0.7rem')};
  ${onAttention} {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${({ isOpen, theme }) =>
      isOpen ? 'none' : `0 2px 3px 0px ${theme.colors.borderColor}`};
  }
`;

export default Input;
