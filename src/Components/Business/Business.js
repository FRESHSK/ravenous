// src/components/Business/Business.js
import React from 'react';
import styles from './Business.module.css';

const Business = (props) => {
  return (
    <div className={styles.Business}>
      <div className={styles['image-container']}>
        <img src={props.business.imageSrc} alt=''/>
      </div>
      <h2>{props.business.name}</h2>
      <div className={styles['Business-information']}>
        <div className={styles['Business-address']}>
          <p>{props.business.address}</p>
          <p>{props.business.city}</p>
          <p>{props.business.state} {props.business.zipCode}</p>
        </div>
        <div className={styles['Business-reviews']}>
          <h3>{props.business.category}</h3>
          <h3 className={styles.rating}>{props.business.rating} stars</h3>
          <p>{props.business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
