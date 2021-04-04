import React from 'react'
import ReactDOM from 'react-dom'
import Thought from './Thought'

it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Thought/>, div)
    ReactDOM.unmountComponentAtNode(div)
})