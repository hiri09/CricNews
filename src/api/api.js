const API_KEY="ce6f8bd7-612d-48ea-b19c-d0b225aa0497";
export const getMatchesInfo=()=>{
    const url=`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`;
    return fetch(url)
    .then((res)=>{
        return res.json();
    })
    .catch((err)=>{
        console.log(err);
    })
}
//https://api.cricapi.com/v1/cricScore?apikey=ce6f8bd7-612d-48ea-b19c-d0b225aa0497
export const getMatchScore=()=>{
    const url=`https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`;
    return fetch(url)
    .then((res)=>{
        return res;
    })
    .catch((err)=>{
        console.log(err);
    })
}