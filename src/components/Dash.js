import "../App.css";
import Body from "./Body";
import Chart from "./Chart";

function Dash () {
    return (
    <ul className="component-items">
        <ul style={{ "listStyle": "none", padding: 0 }}>
          <li>
            <Body/>
          </li>
          <li> 
            <Chart/>
          </li> 
        </ul>
      </ul> 
    )
}

export default Dash;
