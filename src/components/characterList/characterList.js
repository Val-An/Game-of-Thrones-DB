import React, {Component} from 'react'
import './characterList.css'
import gotService from '../../services/gotService'
import Spinner from "../spinner/spinner";

export default class CharacterList extends Component {

	gotService = new gotService()

	state = {
		charList: null
	}

	componentDidMount() {
		this.gotService.getAllCharacters()
				.then((charList) => {this.setState({charList})})
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
	}

	componentWillUnmount() {
	}

	renderItems(arr) {
		return arr.map((item, i) => {
			const searchId = /\d{1,50}/
			const id = item.url.match(searchId)
			return (
					<li key={i}
							className="list-group-item"
							onClick={() => this.props.onCharSelected(id)}
					>
						{item.name}
					</li>
			)
		})
	}

	render() {

		const {charList} = this.state

		if (!charList) {return <Spinner/>}

		const item = this.renderItems(charList)

		return (
				<ul className="item-list list-group all-items">
					{item}
				</ul>
		);
	}

}

