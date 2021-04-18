import noimg from '../../images/noimg.jpg';
import PropTypes from 'prop-types';
import scss from './UserProfile.module.scss';

const UserProfile = ({ name, tag, location, avatar, followers, views, likes }) => {
  return (
    <div className={scss.profile}>
      <div className={scss.description}>
        <img src={avatar} alt='Аватар пользователя' className={scss.avatar} width='100' />
        <p className={scss.name}>{name}</p>
        <p className={scss.tag}>{tag}</p>
        <p className={scss.location}>{location}</p>
      </div>

      <ul className={scss.stats}>
        <li className={scss.list}>
          <span className={scss.label}>Followers</span>
          <span className={scss.quantity}>{followers}</span>
        </li>
        <li className={scss.list}>
          <span className={scss.label}>Views</span>
          <span className={scss.quantity}>{views}</span>
        </li>
        <li className={scss.list}>
          <span className={scss.label}>Likes</span>
          <span className={scss.quantity}>{likes}</span>
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
