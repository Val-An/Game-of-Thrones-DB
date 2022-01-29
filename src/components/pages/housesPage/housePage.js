import React, {Component} from "react";
import "../itemPage.css"
import ItemList from "../../itemList/itemList";
import ItemDetails, {Field} from "../../charDetails/itemDetails";
import ErrorMesage from "../../errorMesage/errorMesage";
import gotService from "../../../services/gotService";
import ItemBlock from "../../itemBlock/itemBlock";



export default class HousesPage extends Component {

	gotService = new gotService()

	state = {
		selectedHouse: 112,
		error: false
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	onItemSelected = (id) => {
		this.setState({
			selectedHouse: id
		})
	}

	render() {

		if (this.state.error) {
			return <ErrorMesage/>
		}

		const itemList = (
				<ItemList onItemSelected={this.onItemSelected}
									getData={this.gotService.getAllHouses}
									renderItem={({name}) => `${name}` }/>
		)

		const itemDetail = (
				<ItemDetails itemId={this.state.selectedHouse}
										 getData={this.gotService.getHouse}>
					<Field field='region' label='Region'/>
					<Field field='words' label='Slogan'/>
					{/*<Field field='titles' label='Titles'/>*/}
					{/*<Field field='overlord' label='Overlord'/>*/}
				</ItemDetails>
		)

		return(
				<ItemBlock left={itemList} right={itemDetail}/>
		)
	}
}