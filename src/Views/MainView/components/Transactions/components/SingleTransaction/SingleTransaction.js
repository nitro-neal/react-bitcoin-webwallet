import React, { Component } from 'react'
import { sent, received, dropdownArrow } from '../../../../../../Assets'
import { colors } from '../../../../../../Styles'
import './SingleTransaction.css'

class SingleTransaction extends Component {

    state = {
        open: null
    }

    toggle() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { method } = this.props.transaction
        return (
            <div
                className={`SingleTransaction ${this.state.open ? 'open' : ''}`}
                onClick={this.toggle.bind(this)}
            >
                <div className='transactionHead'>
                    <div className='method'>
                        <img
                            src={method === 'sent' ? sent : received}
                            alt='' />
                        <span style={{
                            color: method === 'sent' ? 'inherit' : colors.primaryColor
                        }}>
                            {
                                method === 'sent' ? 'Sent' : 'Received'
                            }
                        </span>
                    </div>
                    <div className='amount'>
                        <span style={{
                            color: method === 'sent' ? 'inherit' : colors.primaryColor
                        }}>
                            {this.props.amount || '-25.00'}
                        </span>
                        <img
                            src={dropdownArrow}
                            alt=''
                        />
                    </div>
                </div>

                <div className='transactionDetails'>
                    <div className='column'>
                        <div className='detailWrap'>
                            <div className='leftLine'></div>
                            <div className='content'>
                                <div className='detailTitle'>
                                    Date
                                </div>
                                <div className='detailValue date'>
                                    31/03/2019 7:19 PM
                                </div>
                            </div>
                        </div>

                        <div className='detailWrap'>
                            <div className='leftLine'></div>
                            <div className='content'>
                                <div className='detailTitle'>
                                    {method === 'sent' ? 'To' : 'From'}
                                </div>
                                <div className='detailValue' style={{
                                    color: window.innerWidth < 800 ? colors.primaryColor : ''
                                }}>
                                    hx3bslkedfndsflbsdlj33j4asfgsdf…
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='detailWrap'>
                            <div className='leftLine'></div>
                            <div className='content'>
                                <div className='detailTitle'>
                                    TransactionID
                                </div>
                                <div className='detailValue' style={{
                                    color: window.innerWidth > 800 ? colors.primaryColor : ''
                                }}>
                                    hx3bslkedfndsflbsdlj33j4asfgsdf…
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SingleTransaction