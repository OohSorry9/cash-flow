import React from 'react'

function Form({ title, setTitle, amount, setAmount, category, setCategory, type, setType, handleSubmit, }) {
  return (
    <form className="transaction-form-card" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="field field-title">
          <span>Title</span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="e.g Grocery"
            required
          />
        </label>

        <label className="field field-amount">
          <span>Amount</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g 500"
            required
          />
        </label>
      </div>

      <div className="form-row form-row-secondary">

        <label className="field field-category">
          <span>Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Grocery">Grocery</option>
            <option value="Rides">Rides</option>
            <option value="Bills">Bills</option>
            <option value="Stipend">Stipend</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </label>

        <div className="field field-type">
          <span>Type</span>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                required
                name="type"
                value="expense"
                checked={type === 'expense'}
                onChange={() => setType('expense')}
              />
              <span>Expense</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="type"
                required
                value="income"
                checked={type === 'income'}
                onChange={() => setType('income')}
              />
              <span>Income</span>
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="add-btn">
        <span className="add-btn-icon">+</span>
        <span>Add Transaction</span>
      </button>
    </form>
  )
}

export default Form