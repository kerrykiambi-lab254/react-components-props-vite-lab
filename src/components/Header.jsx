// src/components/Header.jsx

import PropTypes from 'prop-types';

export default function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
      <h2>{name} Blog</h2>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
