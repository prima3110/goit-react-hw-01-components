import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title.toUpperCase()}</h2>
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: 'This is Default Title',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
