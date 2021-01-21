import React from "react";
import AdoptLinks from "./AdoptLinks";
import "../index.css";
import Mission from "./Mission";
import Start from "./Start";

export default class Home extends React.Component {
  render() {
    return (
      <main>
        <Mission />
        <img class="border" src="dogsil.png" />
        <Start />
        <AdoptLinks />
      </main>
    );
  }
}
