import React, {Component} from 'react'
import './randomChar.css'
import gotService from '../../services/gotService'
import Spinner from '../spinner/spinner'
import ErrorMesage from "../errorMesage/errorMesage";

export default class RandomChar extends Component {

	constructor() {
		super()
		this.updateChar()
	}

	gotService = new gotService()
	state = {
		char: {},
		loading: true,
		error: false
	}

	onCharLoaded = (char) => {
		this.setState({
			char,
			loading: false
		})
	}

	onError = () => {
		this.setState({
			error: true,
			spinner: false
		})
	}

	updateChar() {
		const id = Math.floor(Math.random()*100 + 10)
		this.gotService.getCharacter(id)
				.then(this.onCharLoaded)
				.catch(this.onError)
	}


	render() {
		const {char: {name, gender, born, died, culture}, loading, error} = this.state
		const View = () => {
			return (
					<>
						<h4>Random Character: {name}</h4>
						<ul className="list-group list-group-flush">
							<li className="list-group-item d-flex justify-content-between">
								<span className="term">Gender </span>
								<span>{gender}</span>
							</li>
							<li className="list-group-item d-flex justify-content-between">
								<span className="term">Born </span>
								<span>{born}</span>
							</li>
							<li className="list-group-item d-flex justify-content-between">
								<span className="term">Died </span>
								<span>{died}</span>
							</li>
							<li className="list-group-item d-flex justify-content-between">
								<span className="term">Culture </span>
								<span>{culture}</span>
							</li>
						</ul>

					</>
			)
		}

		return(
				<>
				<div className="random-block rounded" >
					{error ? <ErrorMesage/> : (loading ? <Spinner /> : <View />)}
				</div>
				<button onClick={() => this.updateChar()} className="btn btn-primary btn-random">Change Character</button>
				</>
		)
	}

}