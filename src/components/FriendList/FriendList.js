import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span
            className={
              friend.isOnline ? styles.statusOnline : styles.statusOffline
            }
          />
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
