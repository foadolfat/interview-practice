import * as React from "react";

function App() {
	const [ state, setState ] = React.useState({ });

	React.useEffect(() => {
		fetch("https://swapi.dev/api/films")
		.then(response => response.json())
		.then(async json => {
			await Promise.all(json.results.map(movie => {
				return new Promise((resolve, reject) => {
					const promises = [ ];

					movie.characters.forEach(character => {
						promises.push(fetch(character));
					});
	
					Promise.all(promises).then(responses => {
						Promise.all(responses.map(response => response.json()))
						.then(results => {
							movie.characters = results;

							resolve();

						});
					});
				});
			}));

			setState(json);
		});
	}, []);

	return (
		<div>
			<ul>
				{
					state.results ?
					state.results.map(movie => 
						<li key={movie.title}>
							{ movie.title }
							
							<ul key={movie.title}>
								{
									movie.characters.map(character => {
										if(typeof character === "string") {
											return undefined;
										}

										return <li key={character.name}>{ character.name }</li>;
									})
								}
							</ul>
						</li>
					)
					: "No Results"
				}
			</ul>
		</div>
	);
}

export default App;