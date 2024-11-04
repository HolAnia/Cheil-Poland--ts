import React, { 
  createContext, 
  useState, 
  useContext, 
  ReactNode 
} from 'react';

interface Filters {
  functions: string;
  energetic_class: string;
  capacity: string;
  sort: string;
  search: string;
}

interface FilterContextType {
  filters: Filters;
  handleFilterChange: (newFilters: Partial<Filters>) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    functions: '',
    energetic_class: '',
    capacity: '',
    sort: '',
    search: '',
  });

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <FilterContext.Provider value={{ filters, handleFilterChange }}>
      {children}
    </FilterContext.Provider>
  );
};
