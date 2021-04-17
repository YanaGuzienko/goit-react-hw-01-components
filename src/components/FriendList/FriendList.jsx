import PropTypes from 'prop-types';
import noimg from '../../images/noimg.jpg';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className='friend-list'>
        {friends.map(({ avatar = noimg, name, isOnline, id }) => (
          <li className='item' key={id}>
            <span className='status'>
              {isOnline}
              <img className='avatar' src={avatar} alt='avatar' width='48' />
              <p className='name'>{name}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.defaultProps = {
  avatar: noimg,
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
