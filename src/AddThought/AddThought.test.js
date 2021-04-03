import React from 'react'
import ReactDOM from 'react-dom'
import AddThought from './AddThought'

it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AddThought/>, div)
    ReactDOM.unmountComponentAtNode(div)
})