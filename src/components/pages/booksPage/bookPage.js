import React, {Component} from "react";
import "../itemPage.css"
import ItemList from "../../itemList/itemList";
import ItemDetails, {Field} from "../../charDetails/itemDetails";
import ErrorMesage from "../../errorMesage/errorMesage";
import gotService from "../../../services/gotService";
import ItemBlock from "../../itemBlock/itemBlock";



export default class BooksPage extends Component {

	gotService = new gotService()

	state = {
		selectedBook: 1,
		error: false
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	onItemSelected = (id) => {
		this.setState({
			selectedBook: id
		})
	}

	render() {

		if (this.state.error) {
			return <ErrorMesage/>
		}

		const itemList = (
				<ItemList onItemSelected={this.onItemSelected}
									getData={this.gotService.getAllBooks}
									renderItem={({name}) => name}/>
		)

		const itemDetail = (
				<ItemDetails itemId={this.state.selectedBook}
										 getData={this.gotService.getBook}>
					<Field field='authors' label='Authors'/>
					<Field field='country' label='Country'/>
					<Field field='numberOfPages' label='Number Of Pages'/>
					<Field field='released' label='Released'/>
				</ItemDetails>
		)

		return(
				<ItemBlock left={itemList} right={itemDetail}/>
		)
	}
}