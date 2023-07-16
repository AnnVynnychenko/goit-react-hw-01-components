import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      {items.map(item => {
        return <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
      })}
    </tbody>
  </table>
}

TransactionHistory.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}
