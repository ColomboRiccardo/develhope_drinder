import React, { useEffect } from 'react';

function Card(props) {
	let cocktailImg;

	return (
		<div className='w-10/12 my-12 mx-auto'>
			<img
				src={props.link}
				alt='cocktail'
				className={`cocktailImg rounded-lg`}
			/>
			<h2 className=' -translate-y-28 mx-14 text-xl text-white'>
				{props.title}
			</h2>
			<div className='flex justify-evenly -translate-y-24'>
				<button className='rounded-full w-16 h-16 bg-yellow-400 drop-shadow-md animate-bounce		'>
					Back
				</button>
				<button
					className='rounded-full w-16 h-16 bg-red-400 drop-shadow-md	animate-bounce	'
					onClick={props.changeCocktail}
				>
					Dislike
				</button>
				<button
					className='rounded-full w-16 h-16 bg-green-400 drop-shadow-md	animate-bounce	'
					onClick={props.changeCocktail}
				>
					Like
				</button>
			</div>
		</div>
	);
}

export default Card;
