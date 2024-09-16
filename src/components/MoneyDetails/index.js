// Write your code here
import './index.css'
const MoneyDetails = props => {
  const {income, balance, expenses} = props
  return (
    <div className="Money-Details-container">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-img"
        />
        <div>
          <p className="your-balance">Your Balance</p>
          <p className="balance" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="your-Income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="balance-img"
        />
        <div>
          <p className="your-balance">Your Income</p>
          <p className="balance" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="your-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-img"
        />
        <div>
          <p className="your-balance">Your Expenses</p>
          <p className="balance" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
