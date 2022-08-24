import './App.css';
import { useState } from 'react';
const axios = require('axios');

function App() {
  const [searchValue, setSearchValue] = useState('');

  const movieTitles = options.params.s;

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
        console.log(response.data);
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
              onSubmit={penelope}
              class=" bg-blue-500 rounded-lg ml-2"
            >
              Done
            </button>
          </div>
        </div>

        <div class="flex flex-col bg-slate 700 md:w-1/2">
          <div class="">
            <h1 class="text-4xl text-center text-white">Results</h1>
          </div>
          <div class="">
            <h1>{}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
