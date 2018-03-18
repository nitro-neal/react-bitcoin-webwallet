import React from 'react'
import { SingleTransaction } from '../../Atoms'
import './Transactions.css'

const Transactions = props => (
    <div className='Transactions'>
        <div className='transactionsDate'>
            Jan 22, 2018
        </div>
        <SingleTransaction method='sent' />
        <SingleTransaction />
        <SingleTransaction method='sent' />
        <SingleTransaction />
        {/* <div className='no-history'>
            No History Transactions
        </div> */}
    </div>
)

export default Transactions