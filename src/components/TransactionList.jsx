import React from 'react'
import SectionTitle from './SectionTitle'
import RecentTransactionImg from '../assets/recent-transactions.png'
import GroceriesImg from '../assets/groceries.png'
import './css/transactionList.css'
import ListItem from './ListItem'

function TransactionList({ transactions, filterTransaction = { filterTransaction }
  , setFilterTransaction, deleteTransaction }) {


  return (
    <>
      <div className="transaction-list">
        <div className="transaction-header">
          <SectionTitle
            data={{
              src: RecentTransactionImg,
              alt: "Recent Transactions",
              title: "Recent Transactions"
            }}
          />
          <select value={filterTransaction} name="transaction-type" id="transaction-type" onChange={(e) => setFilterTransaction(e.target.value)}>
            <option value="all">All Transactions</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        {transactions.map((transaction) => {
          console.log(transaction);
          return (<ListItem 
            key={transaction.id}
             data={transaction}
              deleteTransaction={deleteTransaction} />)
        })}
      </div>

    </>
  )
}

export default TransactionList