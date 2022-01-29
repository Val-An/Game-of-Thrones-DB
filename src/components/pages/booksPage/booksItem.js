import React, {Component} from "react";
import gotService from "../../../services/gotService";
import CharDetails, {Field} from "../../charDetails/itemDetails";
import ItemDetails from "../../charDetails/itemDetails";

export default class BooksItem extends Component {

	gotService = new gotService()

	state = {
		selectedBook: 11,
		error: false
	}

	render() {
		return (
				<ItemDetails itemId={this.state.selectedBook}
										 getData={this.gotService.getBook}>
					<Field field='authors' label='Authors'/>
					<Field field='country' label='Country'/>
					<Field field='numberOfPages' label='Number Of Pages'/>
					<Field field='released' label='Released'/>
				</ItemDetails>
		)
	}
}