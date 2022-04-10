import * as React from "react";
import Character from "./Character";


function Characters(characters) {

	return (
		<div>
            <ul>
                {characters ? characters.characters.map(character => {
                    return <Character key={character} character={character}/>
                }) : "No Results"}
            </ul>
		</div>
	);
}

export default Characters;