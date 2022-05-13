import React from "react";

export default function PlayerSearcher() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "RGAPI-7d605235-8f29-4211-ad21-4678c6ef427e";

  function searchForPlayer(event) {
    var APICallString =
      "https://la1.api.riotgames.com/lol/sumoner/v4/summoners/by-name/{sumonerName}" +
      searchText +
      "?api_key=" +
      API_KEY;
    axios
      .get(APICallString)
      .then(function (response) {
        setPlayerData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="container">
        <h5>League of Legends Player Searcher</h5>
        <input type="text" onChange={(e) => searchText(e.target.value)}></input>
        <button onClick={(e) => searchForPlayer(e.target.value)}>
          Search for player
        </button>
      </div>
      {JSON.stringify(playerData) != "{}" ? (
        <>
          <p>{playerData.name}</p>
          <img
            width="100"
            height="100"
            src={
              "http://ddragon.leagueoflegends.com/cdn/12.9.1/img/profileicon/" +
              playerData.profileIconId +
              ".png"
            }
          ></img>
          <p>Summoner level {playerData.summonerLevel}</p>
        </>
      ) : (
        <>
          <p>No player data</p>{" "}
        </>
      )}
    </div>
  );
}
