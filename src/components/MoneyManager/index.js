const transactionTypeOptions = [
    {
      optionId: 'INCOME',
      displayText: 'Income',
    },
    {
      optionId: 'EXPENSES',
      displayText: 'Expenses',
    },
  ]
  
  // Write your code here
  import {Component} from 'react'
  import {v4 as uuidv4} from 'uuid'
  import MoneyDetails from '../MoneyDetails/index'
  import Transaction from '../TransactionItem/index'
  import './index.css'
  class MoneyManager extends Component {
    state = {
      title: null,
      amount: null,
      transaction: transactionTypeOptions[0].optionId,
      transactionlist: [],
    }
    onSubmitTransaction = event => {
      event.preventDefault()
      const {title, transaction, amount} = this.state
      const option = transactionTypeOptions.find(
        eachtransaction => eachtransaction.optionId === transaction,
      )
      const {displayText} = option
      const newTransaction = {
        id: uuidv4(),
        title,
        transactionType: displayText,
        searchAmount: parseInt(amount),
      }
      this.setState(prevState => ({
        transactionlist: [...prevState.transactionlist, newTransaction],
        title: '',
        amount: '',
      }))
    }
    totalAmount = () => {
      const {transactionlist} = this.state
      let income = 0
      transactionlist.forEach(eachItem => {
        if (eachItem.transactionType === transactionTypeOptions[0].displayText) {
          income += eachItem.searchAmount
        }
      })
      return income
    }
    balanceAmount = () => {
      let balance = 0
      let income = 0
      let expenses = 0
      const {transactionlist} = this.state
      transactionlist.forEach(eachItem => {
        if (eachItem.transactionType === transactionTypeOptions[0].displayText) {
          income += eachItem.searchAmount
        } else {
          expenses += eachItem.searchAmount
        }
      })
      balance = income - expenses
      return balance
    }
    expensesAmount = () => {
      const {transactionlist} = this.state
      let expenses = 0
      transactionlist.forEach(eachItem => {
        if (eachItem.transactionType === transactionTypeOptions[1].displayText) {
          expenses += eachItem.searchAmount
        }
      })
      return expenses
    }
    addTitle = event => {
      this.setState({title: event.target.value})
    }
    onAmount = event => {
      this.setState({amount: event.target.value})
    }
    onchangeamount = event => {
      this.setState({transaction: event.target.value})
    }
    deletetransaction = id => {
      const {transactionlist} = this.state
      const transactionItem = transactionlist.filter(
        eachtransaction => eachtransaction.id !== id,
      )
      this.setState({transactionlist: transactionItem})
    }
    render() {
      const balance = this.balanceAmount()
      const income = this.totalAmount()
      const expenses = this.expensesAmount()
      const {title, amount, transaction, transactionlist} = this.state
      return (
        <div className="big-container">
          <div className="welcome-container">
            <h1 className="name">Hi, Saivivek</h1>
            <p className="welcome-paragraph">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>
          <MoneyDetails income={income} balance={balance} expenses={expenses} />
          <div className="bottom-container">
            <form
              className="Transaction-container"
              onSubmit={this.onSubmitTransaction}
            >
              <div className="Add-Transaction-container">
                <h1 className="Add-Transaction">Add Transaction</h1>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <input
                  className="titleInput"
                  placeholder="TITLE"
                  value={title}
                  id="title"
                  onChange={this.addTitle}
                />
                <label className="label" htmlFor="titleAmount">
                  AMOUNT
                </label>
                <input
                  className="titleInput"
                  placeholder="AMOUNT"
                  value={amount}
                  id="titleAmount"
                  onChange={this.onAmount}
                />
                <label className="label" htmlFor="select">
                  TYPE
                </label>
                <select
                  className="titleselect"
                  value={transaction}
                  id="select"
                  onChange={this.onchangeamount}
                >
                  {transactionTypeOptions.map(eachtransaction => (
                    <option
                      key={eachtransaction.optionId}
                      value={eachtransaction.optionId}
                      className="option"
                    >
                      {eachtransaction.displayText}
                    </option>
                  ))}
                </select>
                <div>
                  <button className="Add-button" type="submit">
                    Add
                  </button>
                </div>
              </div>
            </form>
            <div className="Add-Transaction-container">
              <h1 className="add-heading">History</h1>
              <ul className="main-container">
                <li className="sub-elements">
                  <p className="list">Title</p>
                  <p className="list">Amount</p>
                  <p className="list">Type</p>
                </li>
                {transactionlist.map(eachItem => (
                  <Transaction
                    key={eachItem.id}
                    eachtransactionItem={eachItem}
                    deletetransaction={this.deletetransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
  export default MoneyManager
  