import React, { Component } from 'react'
import './TextField.css'

class TextField extends Component {

    state = {
        value: this.props.value,
        focus: null
    }

    input = React.createRef()

    onFocus() {
        this.setState({ focus: true })
    }

    onBlur() {
        if (!this.state.value)
            this.setState({ focus: false })
    }

    onChange(e) {
        this.setState({ value: e.target.value })
        // TODO: I did not know how to acess the address. this.props.send.address was not working..
        this.props.setSendAddress(e.target.value)
    }

    render() {
        return (
            <div className={`TextField ${this.state.focus ? 'focused' : ''}`}>
                <div className='fieldName'>{this.props.name || 'To Address'}</div>
                <input
                    type='text'
                    ref={this.input}
                    // Warning: a component is changing an uncontrolled input of type text to be controlled
                    // value={this.state.value}
                    onBlur={this.onBlur.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
}

export default TextField