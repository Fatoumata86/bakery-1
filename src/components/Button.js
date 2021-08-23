import React from 'react'


class Button extends React.Component {
    render() {
        return(
            <button type="button" 
            className={`btn p-2 ${this.props.isSelected 
            === this.props.children.toLowerCase() 
            && "btn-primary"}`}>
            {this.props.children}</button>
        )
    }
}

export default Button