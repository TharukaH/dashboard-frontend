import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";
import {Nav, Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faAtom, faEarthAsia, faCommentDots, faBiohazard, faStar, faBriefcase} from '@fortawesome/free-solid-svg-icons'

import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";

function Body() {
  //category counts
  const [count, setCount] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/counts").then((response) => {
      setCount(response.data);
    });
  }, []);

  return (
    <div className="container">



{/* <nav>

<label for="touch"><span>titre</span></label>               
<input type="checkbox" id="touch"/> 

<ul class="slide">
  <li><a href="#">Lorem Ipsum</a></li> 
  <li><a href="#">Lorem Ipsum</a></li>
  <li><a href="#">Lorem Ipsum</a></li>
  <li><a href="#">Lorem Ipsum</a></li>
</ul>

</nav>  */}




      <div className="message">
      <Nav.Link href="#home" style={{'paddingLeft': 0, 'paddingRight': 0}}>
              <ul className="menuListMsg" style={{'display':'flex', 'listStyle':'none', 'marginBottom':0, 'paddingLeft': 0, 'justifyContent': 'center'}}>
                <li className="menuIcons" style={{'color': '#3f6ad8', 'backgroundColor': '#ADD8E6'}}>{<FontAwesomeIcon icon={faBell}/>}</li>
                <li className="menuIcons" style={{'color': '#d92550', 'backgroundColor': '#ffc8c7'}}>{<FontAwesomeIcon icon={faAtom}/>}</li>
                <li className="menuIcons" style={{'color': '#3f6ad8', 'backgroundColor': '#D4F1F4'}}>{<FontAwesomeIcon icon={faCommentDots}/>}</li>
                <li className="menuIcons" style={{'color': '#3ac47d', 'backgroundColor': '#ddfada'}}>{<FontAwesomeIcon icon={faEarthAsia}/>}</li>
              </ul>
            </Nav.Link>
      </div>

      <div className="dashSummary" style={{'marginTop': '6rem', 'textAlign': 'center'}}>
        <Container style={{'padding': 0}}>
          <Row className="justify-content-md-center">
            <Col xs lg="2" style={{'margin': 'auto 0', 'padding': 0,}}>
              <FontAwesomeIcon icon= {faBiohazard} style={{'backgroundColor': 'whiteSmoke', 'padding': '1.3rem', 'boxShadow': 'rgba(99, 99, 99, 0.2) 0px 3px 8px', 'borderRadius': '6px', 'fontSize': '1.5rem', 'color': 'salmon'}}/>
            </Col>
            <Col md="auto" style={{'padding': 0}}>
              <ul style={{'listStyle': 'none', 'padding':0}}>
                <li><h3>Analytics Dashboard</h3></li>
                <li style={{'color': 'darkgrey'}}><p style={{'padding': 0, margin: 0, 'fontSize': '0.9rem'}}>This is an example dashboard created using build-in elements and components.</p></li>
              </ul>
            </Col>
            <Col xs lg="2" style={{'alignItems': 'center', 'margin': 'auto 0'}}>
              <ul style={{'listStyle': 'none', 'display': 'flex', margin: 0, padding: 0, 'justifyContent': 'space-around'}}>
                <li type='button'><FontAwesomeIcon icon={faStar} style={{'color': 'white', 'fontSize': '0.8rem', 'backgroundColor': '#31302E', 'padding': '0.7rem', 'borderRadius': '6px', 'boxShadow': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}}/></li>
                <li style={{'marginLeft': '1rem'}}>
                  <DropdownButton id="navbarScrollingDropdown" style={{'visibility': 'visible'}} title={<div style={{'display': 'flex','marginRight': '0.5rem', 'alignItems': 'center'}}><FontAwesomeIcon icon={faBriefcase} style={{'fontSize':'0.7rem'}}/><p style={{'marginBottom': 0, 'marginLeft': '0.5rem'}}>Menu</p></div>} >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <hr style={{'color': 'grey'}}/>

      <div
        className="content"
        style={{
          width: "80vw",
          "marginTop": "2rem",
          border: "2rem solid #ebecee",
        }}
      >
        <div
          className="row"
          style={{
            "backgroundColor": "rgb(248, 248, 247)",
            padding: "1rem",
            "textAlign": "center",
            "borderBottom": "0.1px solid rgb(209, 205, 205)",
            color: "rgb(82, 80, 80)",
          }}
        >
          <div className="col-sm-8">
            Sales Categories
          </div>
          <div className="col-sm-4">
            <button className="portfolio">View All</button>
          </div>
        </div>

        <div
          className="row"
          style={{
            "backgroundColor": "rgb(248, 248, 247)",
            padding: "1rem",
            "textAlign": "center",
            "borderBottom": "0.1px solid rgb(209, 205, 205)",
            color: "rgb(82, 80, 80)",
          }}
        >
          <div className="col-sm">
            <ul className="category">
              <li className="icon">
                <ChairOutlinedIcon />
              </li>
              <li>
                <ul>
                  <li className="description">Furniture</li>
                  <li className="count">
                    {count.slice(0, 1).map((val, key) => (
                      <p key={key}>{val.count_val}</p>
                    ))}
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-sm">
            <ul className="category">
              <li
                className="icon"
                style={{ "backgroundColor": "rgb(247, 189, 43)" }}
              >
                <MapsHomeWorkOutlinedIcon />
              </li>
              <li>
                <ul>
                  <li className="description">Office Supplies</li>
                  <li className="count">
                    {count.slice(1, 2).map((val, key) => (
                      <p key={key}>{val.count_val}</p>
                    ))}
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-sm">
            <ul className="category">
              <li
                className="icon"
                style={{ "backgroundColor": "rgb(161, 236, 47)" }}
              >
                <ImportantDevicesOutlinedIcon />
              </li>
              <li>
                <ul>
                  <li className="description">Technology</li>
                  <li className="count">
                    {count.slice(2, 3).map((val, key) => (
                      <p key={key}>{val.count_val}</p>
                    ))}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="row"
          style={{
            "backgroundColor": "rgb(248, 248, 247)",
            padding: "1rem",
            "textAlign": "center",
            "borderBottom": "0.1px solid rgb(209, 205, 205)",
            color: "rgb(82, 80, 80)",
          }}
        >
          <div className="col-sm">
            <button className="report">View Complete Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
