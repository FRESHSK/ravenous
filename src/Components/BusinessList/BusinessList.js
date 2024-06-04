// src/components/BusinessList/BusinessList.js
import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

const BusinessList = (props) => {
  return (
    <div className={styles.BusinessList}>
      {props.businesses.map(business => {
        return <Business key={business.id} business={business} />;
      })}
    </div>
  );
};

export default BusinessList;
