import React, { ChangeEvent } from 'react';
import { useFilters } from '../../FilterProvider';
import { 
  SearchWrapper, 
  StyledInput 
} from './searchStyles';

const Search: React.FC = () => {
  const { handleFilterChange } = useFilters();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFilterChange({ search: e.target.value });
  };

  return (
    <SearchWrapper>
      <StyledInput
        type="text"
        onChange={handleChange}
        placeholder="Search..."
      />
    </SearchWrapper>
  );
};

export default Search;
