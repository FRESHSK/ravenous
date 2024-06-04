// src/components/SearchBar/SearchBar.js
import React from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(option => {
      const sortByOptionValue = sortByOptions[option];
      return <li key={sortByOptionValue}>{option}</li>;
    });
  }

  render() {
    return (
      <div className={styles.SearchBar}>
        <div className={styles['SearchBar-sort-options']}>
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className={styles['SearchBar-fields']}>
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className={styles['SearchBar-submit']}>
          <button>Let's Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
