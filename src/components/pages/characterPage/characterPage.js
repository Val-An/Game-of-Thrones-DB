import React, {Component} from "react";
import "../itemPage.css"
import ItemList from "../../itemList/itemList";
import ItemDetails, {Field} from "../../charDetails/itemDetails";
import ErrorMesage from "../../errorMesage/errorMesage";
import gotService from "../../../services/gotService";
import ItemBlock from "../../itemBlock/itemBlock";



export default class CharacterPage extends Component {

	gotService = new gotService()

	state = {
		selectedChar: 12,
		error: false
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	onItemSelected = (id) => {
		this.setState({
			selectedChar: id
		})
	}

	render() {

		if (this.state.error) {
			return <ErrorMesage/>
		}

		const itemList = (
				<ItemList onItemSelected={this.onItemSelected}
									getData={this.gotService.getAllCharacters}
									renderItem={({name, gender}) => `${name} (${gender})` }/>
		)

		const itemDetail = (
				<ItemDetails itemId={this.state.selectedChar}
										 getData={this.gotService.getCharacter}>
					<Field field='gender' label='Gender'/>
					<Field field='born' label='Born'/>
					<Field field='died' label='Died'/>
					<Field field='culture' label='Culture'/>
				</ItemDetails>
		)

		return(
				<ItemBlock left={itemList} right={itemDetail}/>
		)
	}
}