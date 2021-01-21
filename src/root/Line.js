import React from 'react';
import Adopt from './Adopt'

export default class Line extends React.Component {
    render() {
        return <><div class="navbar-adoption">
        <a class="left" href="index.html"> Petful </a>
        </div>
        <Adopt /> </>
    }
}