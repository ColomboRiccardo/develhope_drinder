import Header from './components/Header';
import { SearchBar } from './components/Search';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {
	const [cocktail, setCocktail] = useState([]);

	const FetchCocktail = async () => {
		const response = await fetch(
			'https://www.thecocktaildb.com/api/json/v1/1/random.php'
		);
		const json = await response.json();

		return json.drinks[0];
	};

	useEffect(() => {
		FetchCocktail().then(setCocktail).catch(console.log);
	}, [setCocktail]);

	const changeCocktail = () => {
		FetchCocktail().then(setCocktail).catch(console.log);
	};

	return (
		<div className='App bg-gradient-to-r from-purple-400 to-pink-300 rounded-lg'>
			<Header />
			<SearchBar />
			<Card
				title={cocktail.strDrink}
				link={cocktail.strDrinkThumb}
				changeCocktail={changeCocktail}
			/>
		</div>
	);
}

export default App;

//https://www.thecocktaildb.com/api/json/v1/1/random.php
