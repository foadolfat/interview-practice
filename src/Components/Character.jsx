import * as React from "react";


function Character(character) {
	const [ state, setState ] = React.useState({ 
        name: "Loading...",
    });

	React.useEffect(() => {
		fetch(character.character)
		.then(response => response.json())
		.then(async json => {
            setState(json);
		});
	}, []);

	return (
		<div>
            <li>
                {state ? state.name : "No Result"}
            </li>
		</div>
	);
}

export default Character;