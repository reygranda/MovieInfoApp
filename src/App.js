import './App.css';
import { useState } from 'react';
const axios = require('axios');

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [movieList, setMovieList] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: { s: searchValue, r: 'json', page: '1' },
    headers: {
      'X-RapidAPI-Key': 'b39c537b8cmsh4fe552599effec8p153baejsn5178623e2f1f',
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
    },
  };
  const penelope = () => {
    axios
      .request(options)
      .then(function (response) {
        setMovieList(response.data.Search);
        console.log(movieList);
      })

      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="App">
      <div class="flex flex-row py-10 h-screen bg-slate-700">
        <div class="flex flex-col justify-center text-center bg-slate-400 md:w-1/2">
          <h1 class="text-3xl text-white font-medium">Search for Movies!</h1>
          <br />
          <div>
            <input
              class="border-2 border-gray-400 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
            />
            <button
              type="submit"
              onClick={penelope}
              class=" bg-blue-500 rounded-lg ml-2"
            >
              Done
            </button>
          </div>
        </div>

        <div class="flex flex-col bg-slate 700 md:w-1/2">
          <div>
            <h1 class="text-4xl text-center text-white">Results</h1>
          </div>
          <div>
            {movieList.map((item) => {
              return (
                <div class="flex flex-row overflow-y-auto">
                  <img class="w-1/12" src={item.Poster} alt={item.Type}></img>
                  <h1 class="text-2xl text-center text-white font-bold">
                    {item.Title}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
