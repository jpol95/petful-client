import React from 'react';
import kitty from '../resources/kitty.jpg';
import puppy from '../resources/puppy.jpg';
import { HashLink as Link } from 'react-router-hash-link'

export default class AdoptLinks extends React.Component {
    render() {
return <div id="adopt" className="adopt">
            <h2> Meet our pets! </h2>
            <div className="petpics">
                <Link to="/adoption-page#navbar-adoption" className="container-cat">
                <img alt="cat image" src={kitty} />
                    <div className="overlay"></div>
                    <div className="o-text">
                        <div className="text">Check the cat out</div>
                    </div>
                </Link>
                <Link to="/adoption-page#navbar-adoption" className="container-dog">
                    <img alt="dog image" src={puppy} />
                    <div className="overlay"></div>
                    <div className="o-text">
                        <div className="text">Check the dog out</div>
                    </div>
                </Link>
            </div>
        </div>
        }
        }