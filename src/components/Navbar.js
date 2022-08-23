import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) =>  {
   {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{props.text}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
        <a className="nav-link" href="/business">Business</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/entairnment">Entairnment</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/general">General</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/health">Health</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/science">Science</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/sports">Sports</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/technology">Technology</a>
      </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar
