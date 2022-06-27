import React from 'react';
import { useState } from 'react';

export const SearchBar = () => {
	const [data, setData] = useState('');
	const handleSearch = e => {
		e.preventDefault();
		console.log(data);
	};
	return (
		<div className='text-center flex justify-center'>
			<input
				type='search'
				id='search'
				placeholder='Search your favourite cocktail'
				className='p-2 h-10 w-8/12  rounded-l-lg'
				value={data}
				onChange={e => setData(e.target.value)}
			/>
			<button
				type='submit'
				onClick={handleSearch}
				className=' p-2 h-10  w-2/12 bg-white rounded-r-lg'
			>
				Cerca
			</button>
		</div>
	);
};
