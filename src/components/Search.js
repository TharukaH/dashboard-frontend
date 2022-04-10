import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import Axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import data from './data';

function Search() { 

    const [empData, setEmpData] = useState([]);
    const [selects, setSelects]  = useState();
    const [dataType, setDataType]  = useState();
    const [operates, setOperates] = useState([]);
    const [symbol, setSymbol] = useState();
    const [inVal, setInVal] = useState();
    const [tableVal, setTableVal] = useState([]);
    const [searchRes, setSearchRes] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/emps").then((response) => {
        setEmpData(response.data);    
        });
    }, []);
        
    function updateOpts(e){ 
        setSelects(e.target.value);        
        setDataType(e.target[e.target.selectedIndex].id);

        for (let i=0;i<data.length;i++) {
            if (data[i].id === e.target[e.target.selectedIndex].id) {
                setOperates(data[i].operator);
            }
        }
    }

    function updateSym(e){
        setSymbol(e.target.value);
    }
    
    const searchResult = () => {

        document.getElementById("list").style.display = "block";
        document.querySelector(".paginationBtn").style.visibility = "visible";

        const res_val = {
            column: selects,
            symbol: symbol,
            val: inVal,
            logic: ""
        }
        searchRes.push(res_val);

        Axios.post("http://localhost:5000/result", searchRes).then((response) =>{
            setTableVal(response.data);
        })
        //empty the array
        searchRes.length = 0;
    };

    function repeatAnd() {

        let resultVal = {
            column : selects,
            symbol : symbol,
            val : inVal,
            logic : "AND"
        }
        searchRes.push(resultVal);
    }

    function repeatOr() {
        let resultVal = {
            column : selects,
            symbol : symbol,
            val : inVal,
            logic : "OR"
        }
        searchRes.push(resultVal);
    }

    //pagination start....
    const [pageNumber, setPageNumber] = useState(0);
    const [usersPerPage, setUsersPerPage] = useState(20);
    const [tempVal, setTempVal] = useState(20);
    const pagesVisited = pageNumber*usersPerPage;
    const pageCount = Math.ceil(tableVal.length/Number(usersPerPage));

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    console.log(pageNumber);

    const rowSelect = () => {
        setUsersPerPage(Number(tempVal));
    }
    //pagination end....

    return (
        <div className="search">
            <Container style={{'padding': '3rem', 'backgroundColor': 'whiteSmoke', 'textAlign': 'center', border: "2rem solid #ebecee", 'marginLeft': '10rem', 'marginRight': 0}}>
                <Row >
                    <Col><h4 className="animate-character">Search Employee Details</h4></Col>
                </Row> 
                
                <ul id="repeatSearch">
                    <li>
                        <select onChange={(e)=> updateOpts(e) }    
                            style={{'padding': '0.5rem 2rem', 'borderRadius': '8px', 'textAlign': 'center', 'display': 'block', 'margin': 'auto', 'marginBottom': '1rem', 'width':'15rem'}}>
                            <option defaultValue disabled={false}>--Select Department--</option>
                            {
                                empData.map((val, key) => (
                                    <option key={key} value={val.Field} id={val.Type}>{val.Field}</option>
                                ))
                            }                    
                        </select>
                    </li>
                        
                    <li>
                        <select onChange={e=>updateSym(e)} 
                            style={{'padding': '0.5rem 2rem', 'borderRadius': '8px', 'textAlign': 'center', 'display': 'block', 'margin': 'auto', 'marginBottom': '1rem', 'width': '15rem'}}>
                            <option defaultValue disabled={false}>--Select Operation--</option>
                            {
                                operates.map((symbols, key) => <option key={key}>{symbols}</option>)
                            }                    
                        </select> 
                    </li> 

                    <li>
                        <input placeholder="Enter The Value.." onChange={e=>setInVal(e.target.value)}
                        style={{'textAlign': 'center', 'width': '15rem', 'padding': '0.3rem 2rem', 'border': '1px solid black', 'borderRadius': '8px'}}/>   
                    </li>
                </ul>    
                
                <button className="searchBtn" style={{"borderRadius": "10px 0 0 10px"}} onClick={repeatAnd}>AND</button>
                <button className="searchBtn" style={{"borderRadius": "0 10px 10px 0"}} onClick={repeatOr}>OR</button>

                <button className="searchBtnA" onClick={searchResult}>Search</button>     

                {/* pagination row selects */}
                <div className="rowSelection">
                    <input placeholder="Rows per page..." onChange={e => setTempVal(e.target.value)}/>  
                    <button onClick={rowSelect}>Press</button>
                </div>          

                <table id='list'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>satisfaction Level</th>
                            <th>Last Evaluation</th>
                            <th>Project No</th>
                            <th>Average Monthly Hours</th>
                            <th>Time Spend</th>
                            <th>Work Accident</th>
                            <th>Left</th>
                            <th>Promotion Last 5yrs</th>
                            <th>DepId</th>
                            <th>Salary</th>
                        </tr>
                    </thead>


                    {tableVal.slice(pagesVisited, pagesVisited + usersPerPage).map((val, keys)=> (
                    <tbody key={keys}>
                        <tr>
                            <td>{val.empId}</td>
                            <td>{val.satisfaction_level}</td>
                            <td>{val.last_evaluation}</td>
                            <td>{val.projectNo}</td>
                            <td>{val.average_montly_hours}</td>
                            <td>{val.time_spend_company}</td>
                            <td>{val.Work_accident}</td>
                            <td>{val.left}</td>
                            <td>{val.promotion_last_5years}</td>
                            <td>{val.deptId}</td>
                            <td>{val.salary}</td>
                        </tr>  
                    </tbody>    
                    ))}
                </table>   
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtn"}
                    previousLinkClassName={"previousBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />  
            </Container>
        </div>
    )   
}

export default Search;