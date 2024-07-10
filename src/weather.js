import React from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..."  className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary w-100"/>
                
                </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row" mt-3>
                <div className="col-6">
                   <div className="clearfix">
                    < img src="https://up.yimg.com/ib/th?id=OIP.YKvFSocKFQaoo-56XlWNMwHaHa&pid=Api&rs=1&c=1&qlt=95&w=106&h=106" alt="mostly cold" className="float-left"/>
                    <div className="float-letf">
                      <span className="temperature">6</span>
                      <span className="unit">°C</span>
                    </div>
                
                </div>
            </div>
             <div className="col-6">
                    <ul>
                        <li>precipitation: 15%</li>
                        <li>Humidity: 72%</li>
                        <li>Wind: 13 km/h</li>

                    </ul>
                </div>

            </div>
        </div>
    );
}