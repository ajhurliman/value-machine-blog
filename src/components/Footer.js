import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import reddit from '../img/social/reddit.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <h1 style={{color: 'white'}}>VALUE MACHINE</h1>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <a href="https://www.valuemachine.io" className="navbar-item">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="https://www.valuemachine.io/faq" className="navbar-item" to="/about">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="https://www.valuemachine.io/privacy" className="navbar-item" to="/products">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li className="footer-item">
                      ©2020 ValueMachine LLC All rights reserved.
                    </li>
                    <li className="footer-item">
                      Market data by IEX Cloud
                    </li>
                    <li className="footer-item">
                      Investing in securities products involves risk, including possible loss of principal.
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="instagram" href="https://instagram.com/valueamchine">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://reddit.com/r/valuemachine">
                  <img
                    src={reddit}
                    alt="Reddit"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
