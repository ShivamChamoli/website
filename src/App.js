import React, { Component } from 'react';
import './App.css';
import { Navbar,  NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import Content from './components/Content.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type:"home",
      heading: "Home",
      collapsed: true,
    };
  }

  componentDidMount(){
    var self = this;
    if(self.props.match.params.componentName !== undefined) {
        this.setState(prevState => ({
            type: self.props.match.params.componentName
        }));
    }
  }

  redirect(path){
    //console.log(path)
    this.props.history.push(path);
  }

  findPath(e, name, heading) {
    e.preventDefault();
    var self = this;
    if(self.props.match.params.componentName !== undefined) {
        this.setState(prevState => ({
            type: name,
            heading: heading 
        }));
    }
    this.redirect("/home/"+name);
  }

  onSelect(e){
    //console.log('OnSelect')
    /*this.setState({
      collapsed: !this.state.collapsed,
    });*/
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
          <div className="navbar-settings">
            <Navbar className="navbar-main-class" fixedTop collapseOnSelect>
              <Navbar.Brand>
                <a href="#home">Woodsorrel</a>
                {/*<img src={logo} className="App-logo" alt="logo" /> */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav onSelect={this.onSelect}>
                  <NavItem eventKey={1} href="#" onClick= {(e) => this.findPath(e, "home", "Home")}>
                    Home
                  </NavItem>
                  <NavItem eventKey={2} href="#" onClick= {(e) => this.findPath(e, "aboutus", "About Us")}>
                    About Us
                  </NavItem>
                  <NavItem eventKey={3} href="#" onClick= {(e) => this.findPath(e, "oursystem", "Our System")}>
                    Our System
                  </NavItem>
                  {/*<NavItem eventKey={3} href="#" onClick={(e) => this.findPath(e, "locations", "Our Locations")}>
                      Our Locations
                  </NavItem>*/}
                  <NavItem eventKey={4} href="#" onClick= {(e) => this.findPath(e, "ourfaculty", "Our Faculty")}>
                    Our Faculty
                  </NavItem>
                  {/*<NavItem eventKey={5} href="#" onClick= {(e) => this.findPath(e, "whatsnew", "Whats new")}>
                    Whats new
                  </NavItem>*/}
                  <NavItem eventKey={6} href="#" onClick={(e) => this.findPath(e, "albums", "Albums")}>
                      Albums
                  </NavItem>
                  <NavDropdown eventKey={3} title="Admission Information" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} onClick= {(e) => this.findPath(e, "admissioninformation", "Admission Information")}>Admission Information</MenuItem>
                    <MenuItem eventKey={3.2} onClick= {(e) => this.findPath(e, "documentsrequired", "Documents Required")}>Documents Required</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4} onClick= {(e) => this.findPath(e, "contactus", "Contact Us")}>Contact Us</MenuItem>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <header className="App-header">
            <h2>
              Woodsorrel, Angels' Meadow Preschool
            </h2>
          </header>
          <div className="main-content-class">
            <Content type={this.state.type} heading={this.state.type}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
