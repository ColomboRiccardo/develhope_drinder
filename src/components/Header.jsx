import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className='m-4 text-white'>
				<h1 className='text-center text-5xl font-semibold'>DRINDER</h1>
				<h3 className='text-center'>Matcha con il tuo cocktail preferito</h3>
			</header>
		);
	}
}

export default Header;
