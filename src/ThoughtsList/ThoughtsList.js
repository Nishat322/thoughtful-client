import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import ThoughtsContext from '../ThoughtsContext'
import Thought from '../Thought/Thought' 
import Button from '../Button/Button'
import './ThoughtsList.css'

class ThoughtsList extends Component {
    static defaultProps = {
        thoughts: []
    }

    static contextType = ThoughtsContext

    render() { 
        const {thoughts} = this.context
        return (  
            <div className = 'ThoughtsList'>
                <div className = 'ThoughtsList_button-container'>
                    <Button
                        tag = {Link}
                        to = '/add-thought'
                        type = 'button'
                        className = 'ThoughtsList_add-thought-button'
                    >
                        Add a Thought
                    </Button>
                </div>
                <ul>
                    {thoughts.map(thought =>
                        <li key = {thought.id}>
                            <Thought
                                id = {thought.id}
                                thought = {thought.thought_name}
                                date_added = {thought.date_added}
                            />
                            <br/>
                        </li>    
                    )}
                </ul>
                <div className = 'ThoughtsList_button-two'>
                    <Button
                        tag = {Link}
                        to = '/add-thought'
                        type = 'button'
                        className = 'ThoughtsList_add-thought-button'
                    >
                        Add a Thought
                    </Button>
                </div>
            </div>
        )
    }
}
 
export default ThoughtsList