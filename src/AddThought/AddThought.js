import React, { Component } from 'react'
import ThoughtsContext from '../ThoughtsContext'

import config from '../config'
import './AddThought.css'

const Required = () => (
    <span className = 'AddThought_required'>*</span>
)

class AddThought extends Component {
    static contextType = ThoughtsContext

    state = {
        error: null
    }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     const {thought_name} = e.target
    //     const thought = thought_name.value
    //     this.setState({error: null})
    //     fetch(`${config.API_ENDPOINT}/thoughts`, {
    //         method: 'POST',
    //         body: JSON.stringify(thought),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //         .then(res => {
    //             if(!res.ok){
    //                 return res.json().then(error => {
    //                     throw error
    //                 })
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             thought_name.value = '',
    //             this.context.addThought(data)
    //             this.props.history.push('/')
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             this.setState({error})
    //         })
    // }

    handleClickCancel = () => {
        this.props.history.push('/thoughts')
    }

    render() { 
        const {error} = this.state
        return (  
            <div className = 'AddThought'>
                <h2> Add Your Thought </h2>
                    <form className = 'AddThought_form' onSubmit = {this.handleSubmit}>
                        {/* {<div className = 'AddThought_error' role = 'alert'>
                            {error && <p>{error.message}</p>}
                        </div>} */}
                        <div>
                            <label htmlFor = 'thought_name'>
                                Add Your Thought Below {' '}
                                <Required/>
                            </label>
                            <input
                                type = 'textarea'
                                name = 'thought_name'
                                id = 'thought_name'
                                placeholder = 'A Penny for your thought?'
                                required
                            />
                        </div>
                        <div className='AddThought__buttons'>
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