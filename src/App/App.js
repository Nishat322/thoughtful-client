import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'

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

    addThought = thought => {
        this.setState({
            thoughts: [ ...this.state.thoughts, thought]
        })
    }

    componentDidMount(){
        fetch(`${config.API_ENDPOINT}/thoughts`)
            .then(res =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .then((thoughts) => {
                console.log(thoughts)
                this.setState({ thoughts })
            })
            .catch(error => {
                console.error({error})
            })
    }
    render() { 
        const contextValue = {
            thoughts: this.state.thoughts,
            addThought: this.addThought
        }

        return (  
            <div className = "App">
                <header className = 'App_header'>
                    <h1><Link to = '/thoughts'> Thoughtful Thoughts </Link> </h1>
                </header>
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