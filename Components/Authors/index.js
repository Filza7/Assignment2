import React from 'react';
import styles from './Authors.module.css';

function Authors({ list = [] }) { // Default list to an empty array
  return (
    <div className={styles.authorContainer}>
      {list.map((author) => (
        <div key={author.id} className={styles.authorCard}>
          <div className={styles.authorName}>{author.name}</div>
          <div className={styles.authorBio}>{author.biography}</div>
        </div>
      ))}
    </div>
  );
}

export default Authors;
