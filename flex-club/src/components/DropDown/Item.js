import styled from 'styled-components';

const Item = styled.li`
  position: relative;
  cursor: pointer;
  display: block;
  border: none;
  height: auto;
  text-align: left;
  border-top: none;
  line-height: 1.6rem;
  color: ${({ isActive, isSelected }) =>
    isActive || isSelected ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.87)'};
  text-transform: none;
  box-shadow: none;
  padding: 0.8rem 1.1rem;
  word-wrap: normal;
  background: ${({ isActive }) =>
    isActive ? 'rgba(0,0,0,.03)' : 'transparent'};
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 'inherit')};
`;

export default Item;
