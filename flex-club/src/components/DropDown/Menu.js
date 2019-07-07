import styled from 'styled-components';

const Menu = styled.ul`
  padding: 0;
  margin-top: 0;
  position: absolute;
  font-size: 1.6rem;
  background-color: #ffffff;
  width: 100%;
  max-width: 45rem;
  max-height: 25rem;
  overflow-y: auto;
  overflow-x: hidden;
  outline: 0;
  transition: opacity 0.1s ease;
  border-radius: 0 0 0.7rem 0.7rem;
  border-color: ${props => props.theme.colors.primary};
  border-style: solid;
  border-top-width: 0;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border: ${({ isOpen }) => (isOpen ? null : 'none')};
`;

export default Menu;
