import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import {
  SearchLabel,
  SearchInput,
  InputText,
} from '../../pages/collection/collection.styles';

const SearchBar = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchLabel>
      <SearchInput
        style={{ marginBottom: '1rem' }}
        placeholder=" "
        type="text"
        onChange={handleChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            history.push(`/shop/hledat/${searchTerm}`);
          }
        }}
      />
      <InputText>Hledat: </InputText>
    </SearchLabel>
  );
};

export default withRouter(SearchBar);
