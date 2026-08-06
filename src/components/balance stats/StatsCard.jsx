import React from 'react'
import arrowdown from '../../assets/arrowdown.png'
import arrowup from '../../assets/arrowup.png'
function StatsCard({type, income, expense}) {
    return (
        <div className="total-income-expense">
            <div className="img">
                <img className="summary-img" src={type === 'Income' ? arrowup : arrowdown} alt={type === 'Income' ? "Income" : "Expenses"} />
            </div>
            <div className="total-expenses-content">
                <h3>Total {type}</h3>
                <h2 style={{ color: type === 'Income' ? 'green' : 'red' }}>{
                    type === 'Income' ? income : expense}</h2>
            </div>
        </div>
    )
}

export default StatsCard