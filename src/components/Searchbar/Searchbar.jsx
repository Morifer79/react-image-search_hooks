import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({onSubmit} )=> {
  const [inputValue, setinputValue] = useState('');

  const handleChange = e => {
    setinputValue(e.target.value);
  };

  const handleSubmit = e => {
		e.preventDefault();
		const searchItem = e.target.elements.searchValue.value.trim();
    if (!searchItem) {
      toast.error('Hooray! You found a void...');
    }
    onSubmit(searchItem);
    e.target.reset();
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit} autoComplete="off">
        <SearchFormInput
          type="search"
          onChange={handleChange}
          value={inputValue}
          name="searchValue"
          placeholder="Search images and photos"
          autoFocus
        />
        <SearchFormButton>Search</SearchFormButton>
      </SearchForm>
    </Header>
  );
};
