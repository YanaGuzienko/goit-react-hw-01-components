import PropTypes from 'prop-types';
import scss from './Statistics.module.scss';
import randColor from './Statistics';

const Statistics = ({ title, stats }) => (
  <section className={scss.statistics}>
    {title && <h2 className={scss.title}> {title}</h2>}
    <ul className={scss.list}>
      {stats.map(({ id, label, percentage }) => (
        <li className={scss.item} key={id}>
          <span className={scss.label}>{label}</span>
          <span className={scss.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
