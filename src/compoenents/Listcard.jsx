import React, { useState } from 'react'
import "../CSS/Listcard.css";
//import {getMatchScore} from "../api/api.js";
const Listcard = ({matchdata}) => {
  const[open,setOpen]=useState(false);
  const handleClick = () => {
    if (matchdata.matchStarted) {
      setOpen(true);
    } else {
      alert("Match not Started Yet");
    }
  };
  //console.log(details);
  return (
    <>
      <div className="listMatches">
        <div className="listMatchesCards">
          <div className="listMatchesCards__top">
            <h4>{matchdata.matchType === "" ? "N/A" : matchdata.matchType}</h4>
            <h4>
              {matchdata.matchStarted === true
                ? "Match Started"
                : "Match Not Started Yet"}
            </h4>
          </div>
          <div className="listMatchesCards__date">
            <h5>{new Date(matchdata.dateTimeGMT).toLocaleString()}</h5>
          </div>
          <div className="listMatchesCards__info">
            <h3>{matchdata.teams[0]}</h3>
            <img
              src="https://i.pinimg.com/736x/5e/8e/e2/5e8ee2377be528c940da84012a165e4b.jpg"
              alt=""
            />
            <h3>{matchdata.teams[1]}</h3>
          </div>
          {open && (
            <div className="listMatchesCards__Scores">
              <h4
                style={{
                  fontSize: "small",
                  fontWeight: 400,
                }}
              >
                Toss won by :{" "}
                <span
                  style={{
                    color: "#555",
                    fontWeight: 600,
                    fontSize: "large",
                  }}
                >
                  {matchdata.teams[1]}
                </span>
              </h4>
            </div>
          )}
          {open && (
            <div className="listMatchesCards__Scores">
              {
                matchdata.matchEnded  && matchdata.matchStarted && (
                  <div>
                    <div><span>{matchdata.score[0].inning.split(1) }</span>{matchdata.score[0].r} / <span>{matchdata.score[0].w}</span>
                    (<span>Over : {matchdata.score[0].o}</span>)
                    </div>
                    <div><span>{matchdata.score[1].inning.split(1) }</span>{matchdata.score[1].r} / <span>{matchdata.score[1].w}</span>
                    (<span>Over : {matchdata.score[1].o}</span>)
                    </div>
                    {matchdata.status}
                  </div>
                )
              }
              {  
                 !matchdata.matchEnded  && matchdata.matchStarted && matchdata.status === "No result (due to rain)" && (
                  <div>
                    {matchdata.status}
                  </div>
                )
              }
              {  
                 !matchdata.matchEnded  && matchdata.matchStarted && matchdata.status !== "No result (due to rain)" && matchdata.score.length === 1 && (
                  <div>
                    <div><span>{matchdata.score[0].inning.split(1) }</span>{matchdata.score[0].r} - <span>{matchdata.score[0].w}</span>
                    (<span>overs : {matchdata.score[0].o}</span>)
                    </div>
                    {matchdata.status}
                  </div>
                )
              }
              {  
                 !matchdata.matchEnded  && matchdata.matchStarted && matchdata.status !== "No result (due to rain)" && matchdata.score.length === 2 && (
                  <div>
                    <div><span>{matchdata.score[1].inning.split(1) }</span>{matchdata.score[1].r} - <span>{matchdata.score[1].w}</span>(<span>overs : {matchdata.score[0].o}</span>)</div>
                    
                    {matchdata.status}
                  </div>
                )
              }
              
            </div>
          )}
          <div className="listMatchesCards__button">
            <button onClick={() => handleClick(matchdata.id)}>
              {!open ? "See Score" : "Refresh"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Listcard
