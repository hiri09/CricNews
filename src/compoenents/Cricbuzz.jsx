import React, { useEffect, useState } from 'react'
import "../CSS/cricbuzz.css";
import { ArrowDropDown } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';
const Cricbuzz = ({limit},key) => {
    const[match,setMatch]=useState([]);
    useEffect(()=>{
        setMatch(limit);
    },[limit]);
  return (
    <div className="cricbuzz">
        <div className="cricbuzz__header">
            <div className="cricbuzz__headerImage">
                <img src="https://www.cricbuzz.com/images/cbz-logo.png"  width="150px" alt="" />
            </div>
            <div className="cricbuzz__headerOptions">
                <div className="cricbuzz__headerOption">
                    <Link to="/">
                    <h4>Live Scores</h4>
                    </Link>
                </div>
                <div className="cricbuzz__headerOption">
                    <h4>Schedule</h4>
                </div>
                <div className="cricbuzz__headerOption">
                    <Link to="playersearch">
                    <h4>Player Search</h4>
                    </Link>
                </div>
                <div className="cricbuzz__headerOption">
                    <Link to="sportsnews">
                    <h4>News</h4> 
                    <ArrowDropDown/>
                    </Link>
                </div>
                <div className="cricbuzz__headerOption">
                    <h4>Series</h4>
                    <ArrowDropDown />
                </div>
                <div className="cricbuzz__headerOption">
                    <h4>Teams</h4>
                    <ArrowDropDown />
                </div>
                <div className="cricbuzz__headerOption">
                    <h4>Videos</h4>
                    <ArrowDropDown />
                </div>
                <div className="cricbuzz__headerOption">
                    <h4>Rankings</h4>
                    <ArrowDropDown />
                </div>
                <div className="cricbuzz__headerOption">
                    <h4>More</h4>
                    <ArrowDropDown />
                </div>
            </div>
            <div className="cricbuzz__headerSearch">
                <div className="cricbuzz__headerSearchIcon">
                    <Search
                    style={{
                        color: "white",
                    }}
                    />
                    <input placeholder="Search" />
                </div>
            </div>
        </div>
        <div className="cricbuzz__matchStrip">
            <div className="cricbuzz__matchStripLeft">
                <div className="cricbuzz__matchStripLeftMatch">
                    <p>MATCHES</p>
                </div>
                <div className="cricbuzz__matchStrip-LeftMatchOptions">
                    {match.map((doc) => (
                    <div className="cricbuzz__matchStrip-LeftMatchOption" key={doc.id}>
                        <p>{doc.teams[0]}</p>
                        <small>vs</small>
                        <p>{doc.teams[1]}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div className="cricbuzz__all">
                <p>ALL</p>
                <ArrowDropDown />
            </div>
      </div>
    </div>
  );
}

export default Cricbuzz
