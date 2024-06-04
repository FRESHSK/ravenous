// src/App.js
import React from 'react';
import './App.css';
import BusinessList from './Components/BusinessList/BusinessList';
import SearchBar from './Components/SearchBar/SearchBar';

const businesses = [
  {
    id: 1,
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Restaurant 1',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '90210',
    category: 'Food',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 2,
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Restaurant 2',
    address: '456 Elm St',
    city: 'Othertown',
    state: 'TX',
    zipCode: '75201',
    category: 'Cafe',
    rating: 4.0,
    reviewCount: 45
  },
  // Add more hardcoded businesses here
];

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
