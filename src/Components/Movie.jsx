import * as React from "react";
import Characters from "./Characters";


function Movie(movie) {


	return (
		<div>
            <li>
                { movie ? movie.movie.title : "No Results" }
                <Characters characters={movie.movie.characters}/>
            </li>
		</div>
	);
}

export default Movie;