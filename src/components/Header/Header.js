import React from 'react'
import style from './Header.module.css'
import headerImg from './header.jpg'

const Header = () => {
	return (
			<div className={style.header}>
				<img className={style.bg}  src={headerImg} alt="header"/>
			</div>
	)
}

export default Header