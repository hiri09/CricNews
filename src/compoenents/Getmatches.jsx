import React, { useEffect, useState } from 'react'
import Cricbuzz from './Cricbuzz';
import { getMatchesInfo } from '../api/api';
import Listcard from './Listcard';
import { Search } from '@mui/icons-material';
const Getmatches = () => {
    const[matches,setMatches]=useState([]);
    const[search,setSearch]=useState("");
  const limit=matches.slice(0,5);
  useEffect(()=>{
      getMatchesInfo().then((res)=>{
          setMatches(res.data);
          console.log(res.data);
      }).catch((err)=>{
          console.log(err);
      })
  },[])
  
  const matchType = matches.filter((match) => {
    return (
      match.matchType.toLowerCase().includes(search.toLowerCase()) ||
      match.teams[1].toLowerCase().includes(search.toLowerCase()) ||
      match.teams[0].toLowerCase().includes(search.toLowerCase()) 
    );
  });
  return (
    <>
       <Cricbuzz limit={limit} key={limit.id}/>
       <div className="cricbuzz__headerSearch">
          <div className="cricbuzz__headerSearchIcon">
              <Search
              style={{
                  color: "white",
              }}
              />
              <input placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
              
          </div>
        </div>
        {
          matchType.length !== 0
            ? matchType.map((match) => (
                <Listcard key={match.id} matchdata={match}/>
              ))
            : matches.map((match) => (
                <Listcard key={match.id} matchdata={match}/>
              ))
          //alert('No matches found')
        }
    </>
  )
}

export default Getmatches;
