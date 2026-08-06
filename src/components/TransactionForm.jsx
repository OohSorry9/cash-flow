import React from 'react'
import { useState } from 'react'

import addTransactionImg from '../assets/add-transaction.png'
import './css/transactionForm.css'
import SectionTitle from './SectionTitle'
import Form from './Form'

function TransactionForm({ onAddTransaction }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category: category.trim() || 'General',
      type,
      date: Date.now()
    };

    onAddTransaction(transaction);
    setTitle('');
    setAmount('');
    setCategory('');
    setType('expense');
  }

  return (
    <div className="transaction-form">
      <SectionTitle
        data={{
          src: addTransactionImg,
          alt: 'Add Transaction',
          title: 'Add Transaction'
        }}
      />

      <Form
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        type={type}
        setType={setType}
        handleSubmit={handleSubmit}
        category={category}
        setCategory={setCategory}
      />
    </div>
  )
}

export default TransactionForm
