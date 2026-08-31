import { useEffect, useState } from "react";
import { getFilms, type Film } from "./services/ghibli";

import Grid from "./components/Grid";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [films, setFilms] = useState<Film[]>([]);
  const [filteredDirector, setFilteredDirector] = useState<string>("");

  useEffect(() => {
    getFilms().then((data) => setFilms(data));
  }, []);

  const filteredFilms = films.filter((film) =>
    film.director.toLowerCase().includes(filteredDirector.toLowerCase()),
  );

  return (
    <>
      <header>
        <h1>Ghibli Films</h1>
        <input
          type="text"
          placeholder="Search by director"
          value={filteredDirector}
          onChange={(e) => setFilteredDirector(e.target.value)}
        />
      </header>
      <Grid>
        {filteredFilms.map((film) => (
          <Card key={film.id} {...film} />
        ))}
      </Grid>
    </>
  );
}

export default App;
