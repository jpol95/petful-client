import React from "react";
import kitty from "../resources/kitty.jpg";
import puppy from "../resources/puppy.jpg";

export default class Adopt extends React.Component {
  render() {
    return (
      <div id="adopt" class="adopt">
        <h2> Meet the pets! </h2>
        <div class="petpics-adoption">
          <div id="container-cat" class="container-cat">
            <div class="pet-background">
              <img src={kitty} />
              <p className="pet-name">MILO</p>
              <p>
              <b>Age </b>: 3<br /> <br /><b>Breed</b>: 'Golden Retriever'
                <br /> <br /><b>Description</b>: 'A smiling golden-brown golden retreiver
                listening to music.'
                <br /> <br /><b>Gender</b>: Male <br /><br />
                <b>Name</b>: Zim
                <br /><br /><b> Reason {"name"}'s at shelter'</b>: Owner Passed away
              </p>
            </div>
          </div>
          <div id="container-dog" class="container-dog">
            <div class="pet-background">
              <img src={puppy} />
              <p className="pet-name">BUBBLES</p>
              <p>
                <b>Age </b>: 3<br /> <br /><b>Breed</b>: 'Golden Retriever'
                <br /> <br /><b>Description</b>: 'A smiling golden-brown golden retreiver
                listening to music.'
                <br /> <br /><b>Gender</b>: Male <br /><br />
                <b>Name</b>: Zim
                <br /><br /><b> Reason {"name"}'s at shelter'</b>: Owner Passed away
              </p>
            </div>
          </div>
        </div>
        <button>Join the queue</button>
        <div className="loader"></div>
      </div>
    );
  }
}
