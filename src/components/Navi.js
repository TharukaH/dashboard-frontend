import "../App.css";
import React, { useState } from "react";
import {
  Nav,
  Button,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift,faGear,faRectangleAd, faBell, faAtom, faLanguage, faEarthAsia, faPlusCircle, faCommentDots, faBoxArchive} from '@fortawesome/free-solid-svg-icons'
import Sidebar from "./Sidebar";
import Offcanvas from "react-bootstrap/Offcanvas";

import MenuIcon from "@mui/icons-material/Menu";
import { dividerClasses } from "@mui/material";

function Navi() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    // <div id="navibar">
    //   <Nav
    //     activeKey="/home"
    //     onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    //     className="navi-item"
    //   >
    //     <Nav.Item className="hamburger">
    //       <ul>
    //         <li>Dashboard</li>
    //         <li>
    //           <>
    //             <button onClick={handleShow} style={{'marginBottom':'1rem', 'border': 'none', 'backgroundColor':'#ebecee'}}><MenuIcon /></button>

    //             <Offcanvas show={show} onHide={handleClose} style={{'width': '100px'}}>
    //               <Offcanvas.Header  closeButton >
    //                 <Offcanvas.Title></Offcanvas.Title>
    //               </Offcanvas.Header>
    //               <Offcanvas.Body style={{'padding':0}}>
    //                 Some text as placeholder. In real life you can have the
    //                 elements you have chosen. Like, text, images, lists, etc.
    //               </Offcanvas.Body>
    //             </Offcanvas>
    //           </>
    //         </li>
    //       </ul>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-1"></Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-2"></Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="disabled" disabled></Nav.Link>
    //     </Nav.Item>
    //   </Nav>
    // </div>

    <Navbar bg="light" expand="lg" style={{ marginLeft: "192px", position: "sticky", top: 0, 'padding': 0 }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>

            <NavDropdown title={<div style={{'display': 'flex','margin-right': '0.5rem', 'alignItems': 'center'}}><FontAwesomeIcon icon={faGift} /><p style={{'marginBottom': 0, 'marginLeft': '0.5rem'}}>Menu</p></div>} id="navbarScrollingDropdown"> 
            {/* <NavDropdown title={"Menu"} id="navbarScrollingDropdown">  */}
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* <FontAwesomeIcon icon="fa-solid fa-gear" /> */}

            <NavDropdown title={<div style={{'display': 'flex','margin-right': '0.5rem', 'alignItems': 'center'}}><FontAwesomeIcon icon={faGear} /><p style={{'marginBottom': 0, 'marginLeft': '0.5rem'}}>Settings</p></div>} id="navbarScrollingDropdown"> 
            {/* <NavDropdown title="Settings" id="navbarScrollingDropdown"> */}
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<div style={{'display': 'flex','margin-right': '0.5rem', 'alignItems': 'center'}}><FontAwesomeIcon icon={faBoxArchive}/><p style={{'marginBottom': 0, 'marginLeft': '0.5rem'}}>Projects</p></div>} id="navbarScrollingDropdown"> 
            {/* <NavDropdown title="Projects" id="navbarScrollingDropdown"> */}
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#home">
              <ul className="menuList" style={{'display':'flex', 'listStyle':'none', 'marginBottom':0, 'marginLeft':'6rem'}}>
                <li className="menuIcons" style={{'color': '#3f6ad8', 'backgroundColor': '#ADD8E6'}}>{<FontAwesomeIcon icon={faBell}/>}</li>
                <li className="menuIcons" style={{'color': '#d92550', 'backgroundColor': '#ffc8c7'}}>{<FontAwesomeIcon icon={faAtom}/>}</li>
                <li className="menuIcons" style={{'color': '#3f6ad8', 'backgroundColor': '#D4F1F4'}}>{<FontAwesomeIcon icon={faCommentDots}/>}</li>
                <li className="menuIcons" style={{'color': '#3ac47d', 'backgroundColor': '#ddfada'}}>{<FontAwesomeIcon icon={faEarthAsia}/>}</li>
              </ul>
            </Nav.Link>

          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
