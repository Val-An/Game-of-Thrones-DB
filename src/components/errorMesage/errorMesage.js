import React from "react";
import "./errorMesage.css"
import alertImg from "./alert-icon-1577.png"

const ErrorMesage = () => {
	return (
			<>
				<img className="alertImg" src={alertImg} alt="alert"/>
				<span>Something goes wrong</span>
			</>
	)
}

export default ErrorMesage