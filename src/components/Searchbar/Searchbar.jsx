import React from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends React.Component {
  state = {
    searchValue: '',
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchItem = e.target.elements.searchValue.value.trim();
    if (!searchItem) {
      toast.error('Hooray! You found a void...');
    }
    this.props.onSubmit(searchItem);
    e.target.reset();
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit} autoComplete="off">
          <SearchFormInput
            type="search"
            onChange={this.handleChange}
            value={this.state.inputValue}
            name="searchValue"
            placeholder="Search images and photos"
            autoFocus
          />
          <SearchFormButton>Search</SearchFormButton>
        </SearchForm>
      </Header>
    );
  }
}
