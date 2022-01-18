import React, {Component} from 'react'
import './randomChar.css'
import gotService from '../../services/gotService'
import Spinner from '../spinner/spinner'

export default class RandomChar extends Component {

	constructor() {
		super()
		this.updateChar()
	}

	gotService = new gotService()
	state = {
		char: {},
		loading: true
	}

	onCharLoaded = (char) => {
		this.setState({
			char,
			loading: false
		})
	}

	updateChar() {
		const id = Math.floor(Math.random()*100 + 10)
		this.gotService.getCharacter(id)
				.then(this.onCharLoaded)
	}


	render() {
		const {char: {name, gender, born, died, culture}, loading} = this.state
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
					{loading ? <Spinner /> : <View />}
				</div>
				<button onClick={() => this.updateChar()} className="btn btn-secondary">Change Character</button>
				</>
		)
	}

}