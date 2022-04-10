import "../App.css";
import React from "react";
import {Nav,Navbar,Container} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//icons
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import SsidChartOutlinedIcon from "@mui/icons-material/SsidChartOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";

function Sidebar() {

  return (
    <Navbar bg="light" expand="sm">
      <div className="sidebar" style={{ display: "flex", flexDirection: "column"}}>
        <Container style={{ padding: 0 }}>

          <Navbar.Collapse id="basic-navbar-nav"
            style={{
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              maxHeight: "521px",
            }}
          >
            <Nav className="me-auto">
              <Nav defaultActiveKey="/home" className="flex-column">

                <Nav.Item className="side-items">

                  <div className="title">
                    HOME
                  </div>

                  <div className="side-items-2">
                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <RocketOutlinedIcon />
                        </li>
                        <li>Dashboards</li>
                        <label htmlFor="touch"><li className='x'></li></label>                  
                        <input type="checkbox" id="touch"/> 

                        <ul className="slide">
                          <li><a href="#">Lorem Ipsum</a></li> 
                          <li><a href="#">Lorem Ipsum</a></li>
                          <li><a href="#">Lorem Ipsum</a></li>
                          <li><a href="#">Lorem Ipsum</a></li>
                        </ul>
                      </ul>
                    </Nav.Item>

                    <Nav.Item>
                      <ul className="list-item">  
                        <li><AutoStoriesOutlinedIcon /></li>
                        <li><Link to="./">Pages</Link></li>
                        {/* <li>Pages</li>   */}
                      </ul>
                    </Nav.Item>

                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <AppsOutlinedIcon />
                        </li>
                        <li><Link to="./search">Applications</Link></li>
                        {/* <li>Applications</li> */}
                      </ul>
                    </Nav.Item>

                  </div>
                </Nav.Item>

                <Nav.Item className="side-items">

                  <div className="title">
                    UI COMPONENTS
                  </div>

                  <div className="side-items-2">
                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <DiamondOutlinedIcon />
                        </li>
                        <li>Elements</li>
                      </ul>
                    </Nav.Item>

                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <DirectionsCarFilledOutlinedIcon />
                        </li>
                        <li>Components</li>
                      </ul>
                    </Nav.Item>

                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <TableViewOutlinedIcon />
                        </li>
                        <li>Tables</li>
                      </ul>
                    </Nav.Item>

                  </div>
                </Nav.Item>

                <Nav.Item className="side-items">

                  <div className="title">
                    FORMS
                  </div>

                  <div className="side-items-2">
                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <EmojiObjectsOutlinedIcon />
                        </li>
                        <li>Elements</li>
                      </ul>
                    </Nav.Item>

                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <SportsEsportsOutlinedIcon />
                        </li>
                        <li>Widgets</li>
                      </ul>
                    </Nav.Item>
                    
                  </div>
                </Nav.Item>

                <Nav.Item className="side-items">

                  <div className="title">
                    DASHBOARD WIDGETS
                  </div>

                  <div className="side-items-2">
                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <PieChartOutlinedIcon />
                        </li>
                        <li>Chart Boxes 1</li>
                      </ul>
                    </Nav.Item>

                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <FolderSharedOutlinedIcon />
                        </li>
                        <li>Chart Boxes 3</li>
                      </ul>
                    </Nav.Item>

                  </div>
                </Nav.Item>

                <Nav.Item className="side-items">

                  <div className="title">
                    CHARTS
                  </div>

                  <div className="side-items-2">
                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <SsidChartOutlinedIcon />
                        </li>
                        <li>ChartJS</li>
                      </ul>
                    </Nav.Item>

                    <Nav.Item>
                      <ul className="list-item">
                        <li>
                          <AutoGraphOutlinedIcon />
                        </li>
                        <li>Chart Sparklines</li>
                      </ul>
                    </Nav.Item>

                  </div>
                </Nav.Item>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </Navbar>
  );
}

export default Sidebar;
