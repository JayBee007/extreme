import React from 'react';
import Downshift from 'downshift';
import { withTheme } from 'styled-components';

import Input from './Input';
import Button from './Button';
import XIcon from './XIcon';
import ArrowIcon from './ArrowIcon';
import Menu from './Menu';
import Item from './Item';

const DropDown = props => {
  const items = [
    { value: 'Guadalajara', coords: { lng: -103.3475, lat: 20.676667 } },
    { value: 'Amsterdam', coords: { lng: 4.9, lat: 52.366667 } },
    { value: 'Cape Town', coords: { lng: 18.423889, lat: -33.925278 } }
  ];
  const handleSelection = selection => {
    props.onChange(selection || {});
  };
  return (
    <Downshift
      onChange={handleSelection}
      itemToString={item => (item ? item.value : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getToggleButtonProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        clearSelection
      }) => (
        <div style={{ width: '45rem' }}>
          <div style={{ position: 'relative' }}>
            <Input
              {...getInputProps({ isOpen, placeholder: 'Enter a City' })}
            />
            {selectedItem ? (
              <Button onClick={clearSelection} aria-label="clear selection">
                <XIcon />
              </Button>
            ) : (
              <Button {...getToggleButtonProps()}>
                <ArrowIcon isOpen={isOpen} />
              </Button>
            )}
          </div>

          <div style={{ position: 'relative' }} />

          <Menu {...getMenuProps({ isOpen })}>
            {isOpen
              ? items
                  .filter(
                    item => !inputValue || item.value.includes(inputValue)
                  )
                  .map((item, index) => (
                    <Item
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index
                              ? props.theme.colors.secondary
                              : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal'
                        }
                      })}
                    >
                      {item.value}
                    </Item>
                  ))
              : null}
          </Menu>
        </div>
      )}
    </Downshift>
  );
};

export default withTheme(DropDown);
