import React, { Component } from 'react'
import config from '../config'
import ThoughtsContext from '../ThoughtsContext'

import './Thought.css'

class Thought extends Component {
    static defaultProps = {
        onDeleteThought: () => {}
    }

    static contextType = ThoughtsContext

    handleClickDelete = e => {
        e.preventDefault()
        const thoughtId = this.props.id

        fetch(`${config.API_ENDPOINT}/thoughts/${thoughtId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if(!res.ok){
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(()=> {
                this.context.deleteThought(thoughtId)
                this.props.onDeleteThought(thoughtId)
            })
            .catch(error => {
                console.log({error})
            })
    }


    render() { 
        const {thought, author, date_added} = this.props
        return ( 
                <div className = 'Thought'>
                    <h2 className = 'Thought_line'>
                        {`"${thought}"`}
                    </h2>
                    <h4> Dumped by {author ? author :'anonmymous' }</h4>
                    <button className = 'Thought_delete' type = 'button' onClick={this.handleClickDelete}>
                        Remove
                    </button>
                    <div className = 'Thought_date'>
                        Date Added {' '}
                        <span className = 'Thought_date-format'>
                            {date_added}
                        </span>
                    </div>
                </div>
        )
    }
}
 
export default Thought