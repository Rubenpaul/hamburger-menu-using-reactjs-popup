// Write your code here
import './index.css'
import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

class Header extends Component {
  state = {open: false}

  onClickHamburgerMenu = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  renderPopupView = close => (
    <div className="popup-view">
      <div className="close-btn-container">
        <button
          type="button"
          className="close-icon-btn"
          onClick={() => close()}
          data-testid="closeButton"
        >
          <IoMdClose />
        </button>
      </div>
      <ul className="menu-item-card">
        <li className="home-container">
          <AiFillHome />
          <p className="home-text">
            <Link to="/">Home</Link>
          </p>
        </li>
        <li className="about-container">
          <BsInfoCircleFill />
          <p className="about-text">
            <Link to="/about">About</Link>
          </p>
        </li>
      </ul>
    </div>
  )

  render() {
    const {open} = this.state

    return (
      <div className="nav-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="nav-img"
          />
        </Link>

        <Popup
          open={open}
          trigger={
            <button
              type="button"
              className="hamburger-menu-btn"
              onClick={this.onClickHamburgerMenu}
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu />
            </button>
          }
        >
          {close => this.renderPopupView(close)}
        </Popup>
      </div>
    )
  }
}

export default Header
