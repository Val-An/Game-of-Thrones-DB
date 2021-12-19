import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
	return (
			<div>
				<ul className={style.nav}>
					<li>Characters</li>
					<li>Houses</li>
					<li>Books</li>
				</ul>
			</div>
	)
}

export default Navbar