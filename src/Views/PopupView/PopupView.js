import React, { Component } from 'react'
import {
    ConfirmationView,
    SendView,
    ReceiveView,
    InfoView,
    ProcessView,
    SuccessView,
    LoadingView
} from './views'
import { colors } from '../../Styles'
import './PopupView.css'

class PopupView extends Component {

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
            case 'info':
                return <InfoView  {...this.props} />
            case 'loading':
                return <LoadingView {...this.props} />
            case 'confirmation':
                return <ConfirmationView {...this.props} />
            case 'success':
                return <SuccessView {...this.props} />

            default:
                return <div></div>
        }
    }

    render() {
        const { popupView } = this.props.app
        return (
            <div
                className={`PopupView ${popupView ? 'visible' : ''}`}
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

export default PopupView