import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Carousel } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../App.css";

function Chart() {
  const [sales, setSales] = useState([]);
  //chart data
  useEffect(() => {
    Axios.get("http://localhost:5000/sale").then((response) => {
      setSales(response.data);
    });
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <div
        className="row"
        style={{
          padding: "0",
          // 'margin-left': "1rem",
          "backgroundColor": "#ebecee",
        }}
      >
        <div
          className="col-sm"
          style={{
            padding: "2rem",
            margin: "2rem",
            "backgroundColor": "whiteSmoke",
            "borderRadius": "8px",
          }}
        >
          {/* <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item> */}
              <div className="chart-b">
                <LineChart width={400} height={300} data={sales}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="id" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sale"
                    stroke="red"
                    activeDot={{ r: 3 }}
                  />
                </LineChart>
              </div>
            {/* </Carousel.Item> */}

            {/* <Carousel.Item >
              <div className="chart-b">
                <LineChart width={400} height={300} data={sales}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="id" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sale"
                    stroke="#8884d8"
                    activeDot={{ r: 3 }}
                  />
                </LineChart>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="chart-b">
                <LineChart width={400} height={300} data={sales}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="id" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sale"
                    stroke="black"
                    activeDot={{ r: 3 }}
                  />
                </LineChart>
              </div>
            </Carousel.Item> */}
          {/* </Carousel> */}
        </div>

        <div
          className="col-sm"
          style={{
            padding: "2rem",
            margin: "2rem",
            "backgroundColor": "whiteSmoke",
            "borderRadius": "8px",
          }}
        >
          <ul className="timeLine" style={{'lineHeight' : '2rem', 'borderLeft': '2.5px solid #1AA7EC', 'marginLeft':0, 'paddingLeft':'0.7rem', 'listStyle': 'circle'}}>
            <li>All Hands Meeting</li>
            <li>Yet another one, at 15:00 PM</li>
            <li>Build the production release </li>
            <li>Something not important</li>
            <li>This dot has an info state</li>
            <li>This dot has a dark state</li>
            <li>All Hands Meeting</li>
            <li>Yet another one, at 15:00 PM</li>
            <li>Build the production release </li>
            <li>Something not important</li>
            <li>This dot has an info state</li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Chart;
