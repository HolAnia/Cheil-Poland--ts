import React from 'react';
import Select, { StylesConfig, GroupBase } from 'react-select';
import { ReactComponent as CustomArrow } from '../../images/arrow.svg';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  onChange: (selectedOption: Option | null) => void;
  placeholder?: string;
}

const customStyles: StylesConfig<Option, false, GroupBase<Option>> = {
  control: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: '400',
    color: '#000',
    height: '36px',
    margin: '10px 0',
    border: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
    '&:hover': {
      borderColor: state.isFocused ? 'transparent' : provided.borderColor,
    },
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    fontWeight: '400',
    backgroundColor: state.isSelected ? '#F3F3F3' : provided.backgroundColor,
    border: state.isFocused ? 'transparent' : provided.border,
    color: state.isSelected ? '#000' : provided.color,
    '&:hover': {
      backgroundColor: '#F3F3F3',
      border: 'transparent',
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 'none',
    borderColor: 'transparent',
    marginTop: '-5px',
    boxShadow: '4px 4px 4px 0px #00000005',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange, placeholder }) => {
  return (
    <Select 
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      styles={customStyles}
      components={{
        DropdownIndicator: () => (
          <CustomArrow style={{ margin: '0 15px' }} />
        ),
      }}
    />
  );
};

export default CustomSelect;
