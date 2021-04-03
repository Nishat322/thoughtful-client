import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './LandingPage.css'
class LandingPage extends Component {
    render() { 
        return (  
            <div className = 'LandingPage'>
                <h1>Welcome to Thoughtful Thoughts</h1>
                    <h3> This application has been build to collect your thoughts. Simple one-liners about anything. You can either add of delete </h3>
                    <h3> Cronut scenester selfies palo santo meh kale chips. Cloud bread hashtag occupy ethical, chia gastropub jianbing shaman semiotics deep v cornhole plaid. Pinterest fashion axe sriracha deep v. Microdosing keytar pabst, heirloom yr art party pitchfork hella whatever put a bird on it migas man braid fixie. Chicharrones mumblecore before they sold out, pinterest master cleanse you probably haven't heard of them tattooed tumblr typewriter sriracha. Single-origin coffee marfa offal put a bird on it. Jean shorts selvage migas leggings gochujang.</h3>
                <div className = 'LandingPage_enter'>
                    <h2><Link to = '/thoughts'> Enter to Dump Your Thoughts </Link> </h2>
                </div>
            </div>
        )
    }
}
 
export default LandingPage