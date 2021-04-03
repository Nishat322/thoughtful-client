import React, { Component } from 'react'
import ThoughtsContext from '../ThoughtsContext'

import config from '../config'
import './AddThought.css'

class AddThought extends Component {
    static contextType = ThoughtsContext

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    state = {
        error: null
    }

    handleSubmit = e => {
        e.preventDefault()
        const newThought = {
            thought_name: e.target['thought_name'].value,
            author: e.target['author'].value
        }
        fetch(`${config.API_ENDPOINT}/thoughts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newThought),
        })
            .then(res => {
                if(!res.ok){
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(thought => {
                this.context.addThought(thought)
                this.props.history.push('/thoughts')
            })
            .catch(error => {
                this.setState({error})
            })
    }

    handleClickCancel = () => {
        this.props.history.push('/thoughts')
    }

    render() { 
        const {error} = this.state
        return (  
            <div className = 'AddThought'>
                <h2> What are you thinking about? </h2>
                    <form className = 'AddThought_form' onSubmit = {this.handleSubmit}>
                        <div>
                            <label htmlFor = 'thought_name'>
                                Drop Your Thought {' '}
                            </label>
                            <input
                                type = 'textarea'
                                name = 'thought_name'
                                id = 'thought_name-input'
                                placeholder = 'Penny for your thought?'
                                required
                            />
                            <label htmlFor = 'author'>
                                Who are you? {' '}
                            </label>
                            <input
                                type = 'text'
                                name = 'author'
                                id = 'thought-input'
                                placeholder = 'A passing soul'
                            />
                        </div>
                        <div className='AddThought_buttons'>
                                <button type='button' onClick={this.handleClickCancel}>
                                    Cancel
                                </button>
                                {' '}
                                <button type='submit'>
                                    Save
                                </button>
                        </div>
                    </form>
            </div>
        )
    }
}
 
export default AddThought;