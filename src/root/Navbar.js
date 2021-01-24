import React from 'react';
import '../index.css'
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return <div className="navbar">
            <div className="left"> Petful </div>
            <div className="right">
                <a className="pagelink" href="#mission"> Mission </a>
                <a className="pagelink" href="#start"> Adoption Process </a>
                <a className="pagelink" href="#adopt"> Get Started </a>
                <Link className="pagelink" to="/adoption-page"> Adoption Page </Link>
            </div>
        </div>
    }
}