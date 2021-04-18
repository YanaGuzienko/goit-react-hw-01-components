import PropTypes from 'prop-types';
import noimg from '../../images/noimg.jpg';
import scss from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={scss.list}>
      {friends.map(({ avatar = noimg, name, isOnline, id }) => (
        <li className={scss.item} key={id}>
          <span className={scss.status} style={{ backgroundColor: isOnline ? '#ff0000' : '#008000' }}></span>
          {isOnline}
          <img className={scss.avatar} src={avatar} alt='avatar' width='48' />
          <p className={scss.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

// FriendList.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };

export default FriendList;
