import React, { Fragment, useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const url = "https://ghibliapi.herokuapp.com/films";
    const fn = async () => {
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      setData(data);
      //console.log(data.map(film => film.title))
      console.log(data);
    };
    fn();
  }, []);

  return (
    <Fragment>
    <div >
      {data &&
        data.map((film) => (
          <div key= {film.id}>
            <p>{film.title}</p>
            <img src={film.movie_banner} alt="movie banner"></img>
          </div>
          

        ))}
        
      {/* data && comprueba q la data existe antes de renderizarla */}
    </div>
    </Fragment>
  );
};

export default Home;
