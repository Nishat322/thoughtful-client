import React, { Component } from 'react'
import config from '../config'
import ThoughtsContext from '../ThoughtsContext'

import './Thought.css'

class Thought extends Component {
    static defaultProps = {
        onClickDelete: () => {}
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
                this.props.onClickDelete(thoughtId)
            })
            .catch(error => {
                console.log({error})
            })
    }


    render() { 
        console.log('these are the props', this.props)
        return ( 
                <div className = 'Thought'>
                    <h2 className = 'Thought_line'>
                        {`"${this.props.thought}"`}
                    </h2>
                    <h4> Dumped by {this.props.author ? this.props.author :'anonmymous' }</h4>
                    <button className = 'Thought_delete' type = 'button' onClick={this.handleClickDelete}>
                        Remove
                    </button>
                    <div className = 'Thought_date'>
                        Date Added {' '}
                        <span className = 'Thought_date-format'>
                            {this.props.date_added}
                        </span>
                    </div>
                </div>
        )
    }
}
 
export default Thought