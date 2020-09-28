import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo192.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a href="https://www.valuemachine.io" className="navbar-item" title="Logo" style={{}}>
              <img src={logo} alt="ValueMachine" style={{ width: '50px' }} />
            </a>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <a className="navbar-item" href="https://www.valuemachine.io/">
                Home
              </a>
              <a className="navbar-item" href="https://www.valuemachine.io/faq">
                FAQ
              </a>
              <a className="navbar-item" href="https://www.valuemachine.io/settings">
                Profile
              </a>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
