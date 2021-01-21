import React from 'react';
import kitty from '../resources/kitty.jpg';
import puppy from '../resources/puppy.jpg';
import { HashLink as Link } from 'react-router-hash-link'

export default class AdoptLinks extends React.Component {
    render() {
return <div id="adopt" className="adopt">
            <h2> Meet our pets! </h2>
            <div className="petpics">
                <Link to="/adoption-page#container-cat" className="container-cat">
                    <img src={kitty}/>
                    <div className="overlay"></div>
                    <div className="o-text">This is some of the cat's info</div>
                </Link>
                <Link to="/adoption-page#container-dog" className="container-dog">
                    <img src={puppy} />
                    <div className="overlay"></div>
                    <div className="o-text">
                        <div className="text">This is some of the dog's info</div>
                    </div>
                </Link>
            </div>
        </div>
        }
        }