import React from 'react'
import { SingleTransaction } from '../../Atoms'
import './Transactions.css'

const Transactions = props => (
    <div className='Transactions'>

        {
            props.app.transactions.length ?
                <div>
                    <div className='transactionsDate'>
                        Jan 22, 2018
                    </div>
                    <div className='transactionsTable'>
                        {
                            props.app.transactions.map((transaction, i) => (
                                <SingleTransaction
                                    transaction={transaction}
                                    key={i}
                                />
                            ))
                        }
                    </div>

                </div>
                :
                <div className='no-history'>
                    No History Transactions
                </div>
        }


    </div>
)

export default Transactions