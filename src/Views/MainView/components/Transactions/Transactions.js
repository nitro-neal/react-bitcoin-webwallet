import React, { Component } from 'react'
import { SingleTransaction } from './components'
import './Transactions.css'

class Transactions extends Component {
    state = {
        className: ''
    }

    componentDidMount() {
        this.setState({ className: 'fadeIn' })
    }

    render() {
        const { props } = this
        return (
            <div className={`Transactions ${this.state.className}`}>
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
    }
}

export default Transactions