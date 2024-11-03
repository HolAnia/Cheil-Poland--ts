import React from 'react';
import { useFilters } from '../../FilterProvider';
import { 
  FiltersWrapper, 
  LabelWrapper 
} from './filtersStyle';
import content from '../../data/content.json';
import CustomSelect from '../CustomSelect/CustomSelect';

interface Option {
  value: string;
  label: string;
}

const Filters: React.FC = () => {
  const { handleFilterChange } = useFilters();

  const sortOptions: Option[] = [
    { value: "", label: content.filters.all },
    { value: "price", label: content.filters.price },
    { value: "capacity", label: content.filters.capacity },
  ];

  const functionOptions: Option[] = [
    { value: "", label: content.filters.all },
    { value: "Panel AI Control", label: content.filters.option1 },
    { value: "Drzwi AddWash™", label: content.filters.option2 },
    { value: "Silnik inwerterowy", label: content.filters.option3 },
    { value: "Wyświetlacz elektroniczny", label: content.filters.option4 },
  ];

  const energeticOptions: Option[] = [
    { value: "", label: content.filters.all },
    { value: "A", label: content.filters.A },
    { value: "B", label: content.filters.B },
    { value: "C", label: content.filters.C },
  ];

  const capacityOptions: Option[] = [
    { value: "", label: content.filters.all },
    { value: "8", label: content.filters.kg8 },
    { value: "9", label: content.filters.kg9 },
    { value: "10,5", label: content.filters.kg10 },
  ];

  const handleSelectChange = (selectedOption: Option | null, { name }: { name: string }) => {
    handleFilterChange({ [name]: selectedOption ? selectedOption.value : "" });
  };

  return (
    <FiltersWrapper>
      <LabelWrapper>
        {content.filters.sort}
        <CustomSelect
          options={sortOptions}
          onChange={(option) => handleSelectChange(option, { name: 'sort' })}
          placeholder={content.filters.all}
        />
      </LabelWrapper>
      <LabelWrapper>
        {content.filters.functions}:
        <CustomSelect
          options={functionOptions}
          onChange={(option) => handleSelectChange(option, { name: 'functions' })}
          placeholder={content.filters.all}
        />
      </LabelWrapper>
      <LabelWrapper>
        {content.filters.energetic}:
        <CustomSelect
          options={energeticOptions}
          onChange={(option) => handleSelectChange(option, { name: 'energetic_class' })}
          placeholder={content.filters.all}
        />
      </LabelWrapper>
      <LabelWrapper>
        {content.filters.capacity}:
        <CustomSelect
          options={capacityOptions}
          onChange={(option) => handleSelectChange(option, { name: 'capacity' })}
          placeholder={content.filters.all}
        />
      </LabelWrapper>
    </FiltersWrapper>
  );
}

export default Filters;
