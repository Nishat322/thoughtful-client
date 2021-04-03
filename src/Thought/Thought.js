import React, { Component } from 'react'

import './Thought.css'

class Thought extends Component {
    static defaultProps = {
        onClickDelete: () => {}
    }
    render() { 
        return (  
            <div className = 'Thought'>
                <h2 className = 'Thought_line'>
                    {`"${this.props.thought}"`}
                </h2>
                <button className = 'Thought_delete' type = 'button' onClick={() => this.props.onClickDelete(this.props.id)}>
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