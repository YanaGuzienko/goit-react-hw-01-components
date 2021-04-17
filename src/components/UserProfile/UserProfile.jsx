import noimg from '../../images/noimg.jpg';
import PropTypes from 'prop-types';

const UserProfile = ({ name, tag, location, avatar, followers, views, likes }) => {
  return (
    <div className='profile'>
      <div className='description'>
        <img src={avatar} alt='Аватар пользователя' className='avatar' width='100' />
        <p className='name'>{name}</p>
        <p className='tag'>{tag}</p>
        <p className='location'>{location}</p>
      </div>
      <ul className='stats'>
        <li>
          <span className='label'>Followers</span>
          <span className='quantity'>{followers}</span>
        </li>
        <li>
          <span className='label'>Views</span>
          <span className='quantity'>{views}</span>
        </li>
        <li>
          <span className='label'>Likes</span>
          <span className='quantity'>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

UserProfile.defaultProps = {
  avatar: noimg,
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default UserProfile;
