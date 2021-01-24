import React from 'react'
import Home from './Home';
import {Route, Link} from 'react-router-dom'
import Adopt from './Adopt';

function NavBarAdopt(props) {
  return <div id="navbar-adoption" className="navbar-adoption">
        <Link className="left" to="/"> Petful </Link>
    </div>
}

export default class Root extends React.Component {

  render() {
    return (
      <>
      <main>
        <Route path="/adoption-page" component={NavBarAdopt} />
        <Route exact path="/" component={Home} />
        <Route path="/adoption-page" component={Adopt} />
      </main>
    </>
    )
  }
}
