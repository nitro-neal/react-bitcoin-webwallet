import React, { Component } from 'react'
import { SingleTransaction } from './components'
import Moment from 'moment';
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
                                {Moment(props.app.transactions[0].timestamp, "MMM-DD-YYYY").format('MMMM D')} 
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