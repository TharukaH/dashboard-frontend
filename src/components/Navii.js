import '../App.css';
import React from 'react';
import {Form, FormControl, Button, Nav, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift,faGear, faBell, faAtom, faEarthAsia, faCommentDots, faBoxArchive, faBars, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'

localStorage.setItem("_is_collapsed",'yes');

function Navii() {

    function hideTitle() {

        let i;
        let lengthList = document.querySelectorAll(".list-item").length;
        let lengthSide = document.querySelectorAll(".side-items").length;
        
        if (localStorage.getItem("_is_collapsed") === 'yes') {
          console.log(localStorage.getItem("_is_collapsed"));
          for (i = 0; i < lengthList; i++) 
          {
            document.querySelectorAll(".list-item li:nth-child(2)")[i].style.display = "none";
          }
    
          for (i = 0; i < lengthSide; i++) 
          {
            document.querySelectorAll(".side-items .title")[i].style.display = "none";
          }
          document.querySelector(".flex-column").style.lineHeight = '4';
          document.querySelector(".flex-column").style.width = "100px";
          document.querySelector(".bar li:nth-child(1)").style.display = "none";
          localStorage.setItem("_is_collapsed", "no");
         
        } else if (localStorage.getItem("_is_collapsed") === 'no'){
    
          console.log(localStorage.getItem("_is_collapsed") );
          for (i = 0; i < lengthList; i++) 
          {
            document.querySelectorAll(".list-item li:nth-child(2)")[i].style.display = "block";
          }
    
          for (i = 0; i < lengthSide; i++) 
          {
            document.querySelectorAll(".side-items .title")[i].style.display = "block";
          }
          localStorage.setItem("_is_collapsed", "yes")
          document.querySelector(".flex-column").style.width = "192px";
          document.querySelector(".bar li:nth-child(1)").style.display = "block";
        }
    }

    function showMessage() {
      if (localStorage.getItem("_is_collapsed") === 'yes') {
        document.querySelector(".message").style.display = "none";
        localStorage.setItem("_is_collapsed", "no");
      }
      else if (localStorage.getItem("_is_collapsed")=== 'no') {
        document.querySelector(".message").style.display = "block";
        localStorage.setItem("_is_collapsed", "yes");
      }
    }

    return (
        <div className="bar" style={{'zIndex': '999'}}>
            <ul>
                <li>Dashboard</li>
                <li style={{'marginLeft': '2rem'}} type = 'button' onClick={hideTitle}><FontAwesomeIcon icon={faBars}/></li>
            </ul>

            <NavDropdown title={<div style={{'display': 'flex','marginRight': '0.5rem', 'alignItems': 'center'}}><FontAwesomeIcon icon={faGift} /><p style={{'marginBottom': 0, 'marginLeft': '0.5rem'}}>Menu</p></div>} id="navbarScrollingDropdown"> 
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<div style={{'display': 'flex','marginRight': '0.5rem', 'alignItems': 'center'}}><FontAwesomeIcon icon={faGear} /><p style={{'marginBottom': 0, 'marginLeft': '0.5rem'}}>Settings</p></div>} id="navbarScrollingDropdown"> 
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<div style={{'display': 'flex','marginRight': '0.5rem', 'alignItems': 'center'}}><FontAwesomeIcon icon={faBoxArchive}/><p style={{'marginBottom': 0, 'marginLeft': '0.5rem'}}>Projects</p></div>} id="navbarScrollingDropdown"> 
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <div className="menu1" type='button' onClick={showMessage}>
              <FontAwesomeIcon icon={faEllipsisVertical}/>
            </div>
     
            <Nav.Link href="#home" style={{'paddingLeft': 0, 'paddingRight': 0}}>
              <ul className="menuList" style={{'display':'flex', 'listStyle':'none', 'marginBottom':0}}>
                <li className="menuIcons" style={{'color': '#3f6ad8', 'backgroundColor': '#ADD8E6'}}>{<FontAwesomeIcon icon={faBell}/>}</li>
                <li className="menuIcons" style={{'color': '#d92550', 'backgroundColor': '#ffc8c7'}}>{<FontAwesomeIcon icon={faAtom}/>}</li>
                <li className="menuIcons" style={{'color': '#3f6ad8', 'backgroundColor': '#D4F1F4'}}>{<FontAwesomeIcon icon={faCommentDots}/>}</li>
                <li className="menuIcons" style={{'color': '#3ac47d', 'backgroundColor': '#ddfada'}}>{<FontAwesomeIcon icon={faEarthAsia}/>}</li>
              </ul>
            </Nav.Link>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

        </div>
    )
}

export default Navii;