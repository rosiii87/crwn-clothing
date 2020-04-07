import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

const SearchBar = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      style={{ marginBottom: '20px' }}
      placeholder="Hledat"
      type="text"
      onChange={handleChange}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          history.push(`/shop/hledat/${searchTerm}`);
        }
      }}
    />
  );
};

export default withRouter(SearchBar);
