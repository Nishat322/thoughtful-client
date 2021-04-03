import React from 'react'

import './Button.css'

function Button (props){
    const { tag, className, children, ...otherProps } = props

    return React.createElement(
        props.tag,
        {
            className: ['Button', props.className].join(' '),
            ...otherProps
        },
        props.children
    )
}

export default Button

Button.defaultProps = {
    tag: 'a'
}