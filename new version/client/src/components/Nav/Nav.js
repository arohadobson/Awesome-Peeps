import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Nav = () => {
	return (
		<nav className="nav-wrapper blue darken-3">
			<div className="container">
				{/* className is a Materialize classs*/}
				<Link to="/landing" className="brand-logo">
					Greedy Bastards List
				</Link>{' '}
				<SignedInLinks />
				<SignedOutLinks />
			</div>
		</nav>
	);
};

export default Nav;
