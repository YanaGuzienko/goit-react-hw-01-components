import PropTypes from 'prop-types';
import scss from './TransactionHistory.module.scss';

const TransactionHistory = ({ items }) => (
  <table className={scss.transacion__history} rules='none'>
    <thead>
      <tr className={scss.items}>
        <th className={scss.title}>Type</th>
        <th className={scss.title}>Amount</th>
        <th className={scss.title}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={scss.value}>
          <td className={scss.title__value}>{type}</td>
          <td className={scss.title__value}>{amount}</td>
          <td className={scss.title__value}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
