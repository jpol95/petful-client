import React from 'react';

export default class AdoptLinks extends React.Component {
    render() {
return <div id="adopt" className="adopt">
            <h2> Meet our pets! </h2>
            <div className="petpics">
                <div className="container-cat">
                    <img src="kitty.jpg" />
                    <div className="overlay"></div>
                    <div className="o-text">This is some of the cat's info</div>
                </div>
                <div className="container-dog">
                    <img src="puppy.jpg" />
                    <div className="overlay"></div>
                    <div className="o-text">
                        <div className="text">This is some of the dog's info</div>
                    </div>
                </div>
            </div>
        </div>
        }
        }