import React from 'react';
import '../index.css'
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return <div class="navbar">
            <div class="left"> Petful </div>
            <div class="right">
                <a class="pagelink" href="#mission"> Mission </a>
                <a class="pagelink" href="#start"> Adoption Process </a>
                <a class="pagelink" href="#adopt"> Get Started </a>
                <Link class="pagelink" to="/adoption-page"> Adoption Page </Link>
            </div>
        </div>
    }
}