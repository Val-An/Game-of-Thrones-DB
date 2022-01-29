import React from 'react'
import style from './navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
	return (
			<div>
				<ul className={style.nav}>

					<li><Link to='/characters/'>Characters</Link></li>
					<li><Link to='/houses/'>Houses</Link></li>
					<li><Link to='/books/'>Books</Link></li>
					{/*<li>Characters</li>*/}
					{/*<li>Houses</li>*/}
					{/*<li>Books</li>*/}
				</ul>
			</div>
	)
}

export default Navbar