import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
 return <ul className={css.friendList}>
  {friends.map(friend => {
    return <FriendListItem
    key={friend.id}
    name={friend.name}
    avatar={friend.avatar}
    isOnline={friend.isOnline}
    />
  })}
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };
