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
        

        {/* -------02--------- */}

         <nav className="NavbarItems">
          
      
        <h1 className="navbar-logo">Happy</h1>

        <div className="menu-icons " onClick={this.handleClick}>
          <i className={this.state.clicked ? "bi bi-three-dots":"bi bi-x"}></i>
        
        </div>

          <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>

            {MenuItems.map((item,index)=>{
            return(
              <li key={index}>

              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
                </Link>
                {/* <Link to='/wadding'></Link> */}

              </li>

            )

             } )}
          {/* <butt>Sign Up</butt on> */}
           <Link className="button" to='/sing'>Sign Up</Link> 
         </ul>
      </nav> 
      </>
    );
  }
}

export default Navbar;
