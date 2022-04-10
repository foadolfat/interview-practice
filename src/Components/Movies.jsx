import * as React from "react";
import Movie from "./Movie";


function Movies() {
	const [ state, setState ] = React.useState({ });

	React.useEffect(() => {
		fetch("https://swapi.dev/api/films")
		.then(response => response.json())
		.then(async json => {
            setState(json);
		});
	}, []);
    

	return (
		<div >
			<ul>
				{
					state.results ?
					state.results.map(movie => 
						<Movie key={movie.name} movie = {movie}/>
					)
					: "No Results"
				}
			</ul>
		</div>
	);
}

export default Movies;