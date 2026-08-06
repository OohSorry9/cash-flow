import React from 'react'
import { useState, useEffect } from 'react'

import './css/main.css'
import BalanceCard from './BalanceCard'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
function Main() {

  const [transactions, setTransactions] = useState(() =>{
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : []
  })
  const [filterTransaction, setFilterTransaction] = useState('all')

  const displayedTransactions = transactions.filter((transaction) => {
    if (filterTransaction === 'all') return true
    return transaction.type === filterTransaction
  })
  
  useEffect(()=>{
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions])


  const addTransaction = (transaction) => {
    setTransactions(prev =>[...prev, transaction])
  }
  let stats = transactions.reduce((acc, transaction) => {

    if (transaction.type === 'income') {
      acc.income += parseFloat(transaction.amount)
    }
    if (transaction.type === 'expense') {
      acc.expense += parseFloat(transaction.amount)
    } 
    return acc
  }, 
  {
    income: 0,
    expense: 0,
  }
)
const balance = stats.income - stats.expense

const deleteTransaction =(id) =>{
    setTransactions(prev => prev.filter(transaction => transaction.id !== id))
}


  return (
    <main>
        <BalanceCard balance={balance} income ={stats.income} expense={stats.expense}/>
        <TransactionForm onAddTransaction={addTransaction}/>
        <TransactionList 
        transactions={displayedTransactions}
        filterTransaction = {filterTransaction}
        setFilterTransaction ={setFilterTransaction}
        deleteTransaction={deleteTransaction}/>
    </main>
  )
}

export default Main