import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          {/* <h1 className="navbar-logo">Happy</h1> */}

          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "bi bi-x" : "bi bi-three-dots"}></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            ))}
{/*             
            <li>
              <Link className="nav-links-mobile" to="/sign-up">
                Sign Up
              </Link>
            </li> */}
          </ul>
          
        </nav>
      </>
    );
  }
}

export default Navbar;
