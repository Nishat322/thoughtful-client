import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//props.description => description of the project
//button sign up will lead to registration page
class LandingPage extends Component {
    render() { 
        return (  
            <div className = 'LandingPage'>
                 <h1><Link to = '/thoughts'> Thoughtful Thoughts </Link> </h1>
                <h2>My Capstone Project</h2>
                    <h3> Paleo hexagon marfa vegan actually small batch. Synth glossier shaman normcore tilde, taiyaki cloud bread blog pickled. Franzen portland banh mi tilde, aesthetic artisan hashtag forage synth 3 wolf moon messenger bag actually. Roof party gochujang narwhal blue bottle direct trade cardigan iPhone health goth art party lumbersexual lyft seitan tote bag heirloom you probably haven't heard of them. </h3>
                    <h3> Cronut scenester selfies palo santo meh kale chips. Cloud bread hashtag occupy ethical, chia gastropub jianbing shaman semiotics deep v cornhole plaid. Pinterest fashion axe sriracha deep v. Microdosing keytar pabst, heirloom yr art party pitchfork hella whatever put a bird on it migas man braid fixie. Chicharrones mumblecore before they sold out, pinterest master cleanse you probably haven't heard of them tattooed tumblr typewriter sriracha. Single-origin coffee marfa offal put a bird on it. Jean shorts selvage migas leggings gochujang.</h3>
            </div>
        )
    }
}
 
export default LandingPage