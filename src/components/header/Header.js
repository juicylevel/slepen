import React from 'react';
import { Link } from 'react-router-dom';
import Time from '../common/Time';

const Header = () => (
	<header>
		<div>slepen</div>
		<nav>
			<menu>
				<li>
					<Link to='/missions'>миссии</Link>
				</li>
				<li>
					<Link to='/duties'>дежурства</Link>
				</li>
				<li>
					<Link to='/statistics'>статистика</Link>
				</li>
				<li>
					<Link to='/settings'>настройки</Link>
				</li>	
			</menu>
		</nav>
		<div>
			<Time />
		</div>
	</header>
)

export default Header;