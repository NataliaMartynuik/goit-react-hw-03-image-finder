import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { SearchbarHeader, SearchForm, SearchButton, FormInput } from './Searchbar.styled'
import { FaSearch } from 'react-icons/fa';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.query.trim()) {
      toast.error('Please, enter search query.');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleChange = ({ currentTarget }) => {
    this.setState({
      query: currentTarget.value,
    });
  };

  render() {
    const { query } = this.state;
    return (
      <SearchbarHeader >
        <SearchForm  onSubmit={this.handleSubmit}>
          <SearchButton type="submit" >
            <FaSearch />
          </SearchButton>

          <FormInput
            type="text"
            value={query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

