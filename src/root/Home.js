import React from "react";
import AdoptLinks from "./AdoptLinks";
import "../index.css";
import Mission from "./Mission";
import Start from "./Start";
import dogsil from '../resources/dogsil.png'
import NavBar from './Navbar'
import background from '../resources/background.jpg'

function Background(props) {
    return <div className="background-container">
    <img alt="background" className="background" src={background} />
    </div>
  }
export default class Home extends React.Component {
  render() {
    return (
        <>
        <header>
        <NavBar />
        <Background />
        </header>
      <main>
        <Mission />
        <img alt="dog silhouette" className="border" src={dogsil} />
        <Start />
        <AdoptLinks />
      </main>
      </>
    );
  }
}
