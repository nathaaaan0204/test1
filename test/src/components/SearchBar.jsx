import { Button, Input } from '@material-tailwind/react';

import React, { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex">
        
      <Input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={handleInputChange}>
      </Input>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
