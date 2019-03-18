import React, { Component } from 'react'
import {
    ConfirmationView,
    SendView,
    ReceiveView,
    ProcessView,
    SuccessView
} from '../../Molecules'
import { colors } from '../../Styles'
import './Popup.css'

class Popup extends Component {

    constructor(props) {
        super(props)

        this.popupElem = React.createRef()
        this.close = this.close.bind(this)
    }

    close() {
        this.props.setPopup(null)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.app.popupView)
            window.addEventListener('click', this.close)
        else
            window.removeEventListener('click', this.close)
    }

    showView() {
        const { popupView } = this.props.app
        switch (popupView) {
            case 'send':
                return <SendView  {...this.props} />
            case 'receive':
                return <ReceiveView {...this.props} />
            case 'sent':
                return <ProcessView {...this.props} />
            case 'sent':
                return <ConfirmationView {...this.props} />
            case 'sent':
                return <SuccessView {...this.props} />
            default:
                return <div></div>
        }
    }

    render() {
        const { popupView } = this.props.app
        return (
            <div
                className={`Popup ${popupView ? 'visible' : ''}`}
                onClick={e => e.stopPropagation()}
                style={{
                    backgroundColor: window.innerWidth < 800 ? colors.backgroundDark : colors.backgroundDarkish
                }}
            >
                {this.showView()}
            </div>
        )
    }
}

export default Popup