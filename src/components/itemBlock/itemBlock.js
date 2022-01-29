import React from "react";
import "./itemBlock.css"

const ItemBlock = ({left, right}) => {
	return (
			<div className="char-info">
				{left}
				{right}
			</div>
	)
}

export default ItemBlock