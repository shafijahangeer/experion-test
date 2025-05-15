import React from 'react';
import Icon from '../Icon';


const SearchBar = ({
  placeholder = 'Search for products, brands and more',
  onChange,
  onSubmit,
  value,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-bar__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button>
        <Icon name={'search'}/>
      </button>
    </form>
  );
};

export default SearchBar;
