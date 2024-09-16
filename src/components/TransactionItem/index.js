// Write your code here
import './index.css'
const Transaction = props => {
  const {eachtransactionItem, deletetransaction} = props
  const {id, title, transactionType, searchAmount} = eachtransactionItem
  const deleteButton = () => {
    deletetransaction(id)
  }
  return (
    <li className="unordered-container">
      <p className="lister">{title}</p>
      <p className="lister">Rs {searchAmount}</p>
      <p className="lister">{transactionType}</p>
      <button
        type="button"
        className="delete-button"
        onClick={deleteButton}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default Transaction
