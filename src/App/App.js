import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import ThoughtsContext from '../ThoughtsContext'
import ThoughtsList from '../ThoughtsList/ThoughtsList'
import config from '../config'
import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import AddThought from '../AddThought/AddThought'

class App extends Component {
    state = {
        thoughts: [],
        error: null,
    }

    componentDidMount(){
        fetch(`${config.API_ENDPOINT}/thoughts`)
            .then(res =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .then((thoughts) => {
                this.setState({ thoughts })
            })
            .catch(error => {
                console.error({error})
            })
    }

    addThought = thought => {
        this.setState({
            thoughts: [ ...this.state.thoughts, thought]
        })
    }

    deleteThought = thoughtId => {
        this.setState({
            thoughts: this.state.thoughts.filter(thought => thought.id !== thoughtId)
        })
    }

    render() { 
        const contextValue = {
            thoughts: this.state.thoughts,
            addThought: this.addThought,
            deleteThought: this.deleteThought
        }

        return (  
            <div className = "App">
                <ThoughtsContext.Provider value = {contextValue}>
                    <Route 
                        exact path = '/'
                        component = {LandingPage}
                    />
                    <Route
                        path = '/thoughts'
                        component = {ThoughtsList}
                    />
                    <Route
                        path = '/add-thought'
                        component = {AddThought}
                    />
                </ThoughtsContext.Provider>
            </div>
        )
    }
}
 
export default App;