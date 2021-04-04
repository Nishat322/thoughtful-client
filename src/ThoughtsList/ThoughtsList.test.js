import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import ThoughtsList from './ThoughtsList'

it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><ThoughtsList/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})