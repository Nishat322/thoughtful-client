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
                        <header> <h2>Add Your Own Thought </h2></header>
                    </Button>
                </div>
                <Link to = '/'> Back to Home Page </Link>
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
            </div>
        )
    }
}
 
export default ThoughtsList