import React from 'react'
// import propTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function navbar(props) {

    const colorRed = () => {
        alert("ok hain sab kuch");
    }
    return (
        <>
            <div>
                <nav className={`navbar navbar-expand-lg bg-${props.mode === 'primary'?'info':'dark'}`}>
                    <div className="container-fluid">
                        <a className={`navbar-brand text-${props.mode === 'primary'?'dark':'white'}`} href="#">{props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className={`nav-link active text-${props.mode === 'primary'?'dark':'white'}`} aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link active text-${props.mode === 'primary'?'dark':'white'}`} aria-current="page" href="#">About</a>
                                </li>
                            </ul>

                        </div>
                            <button className={`bg-danger mx-1 visually-${props.mode === 'primary'?'hidden':'show'}`}  onClick={() => colorRed() } >Red</button>
                        <div className={`form-check form-switch text-${props.mode === 'primary'?'dark':'white'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}
