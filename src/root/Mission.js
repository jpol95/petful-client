import React from 'react';
import '../index.css';
import houseIcon from '../resources/house_icon.PNG'

export default class Mission extends React.Component {
    render() {
        return  <div id="mission" className="mission">
        <img alt="house icon" src={houseIcon} />
        <h2>Our mission</h2>
        <p>Welcome to the Petful adoption center. Here at Petful, we take pride in providing to every pet a happy and healthy home. 
            Petful was started as a simply company out of Jesse Pollack's garage back in 2004 in the Bush Administration. Jesse Pollack
            envisioned a beautiful ecosystem of pets interacting, socializing, and ultimately finding homes in a humane, safe, cage-free way. 
            Cage free did you say? That's right. We pride ourselves on keeping the pups in rooms with eachother to encourage both 
            socialization with humans and pups alike. We also have the first on-site waterpark and rollercoaster for dogs. Yes sir, 
            our pups enjoy a thrilling and safe way to let off some steam in Puppinator 4000. 

            But let's not forget our lovely cats! Each cat is fixed upon adoption and fully vaccinated. We offer supreme tempurpedic
            mattresses for each cat to sleep on because you know they can be divas sometimes! 
        </p>
    </div>
    }
}