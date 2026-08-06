import React from 'react'
import arrowup from '../assets/arrowup.png'
import arrowdown from '../assets/arrowdown.png'

import './css/balanceCard.css'
import StatsCard from './balance stats/StatsCard'
import Balance from './Balance'

function BalanceCard({balance, income, expense}) {
    return (
        <div className="balanceCard">
            <Balance amount={balance} />

    <hr className="balance-divider" />
            <div className="balance-summary">
                <StatsCard income = {income} type="Income" />
                    <div className="vertical-divider"></div>
                <StatsCard expense = {expense} type="Expense" />

            </div>
        </div>
    )
}

export default BalanceCard