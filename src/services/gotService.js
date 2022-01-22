export default class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api'
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`)

		if(!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}
		return await res.json()
	}

	async getAllCharacters() {
		const res = await this.getResource(`/characters?page=2&pageSize=10`)
		return res.map(this._transformCharacter)
	}

	async getCharacter(id) {
		const character = await this.getResource(`/characters/${id}/`)
		return this._transformCharacter(character, id)
	}

	async getAllHouses() {
		const res = await this.getResource(`/houses`)
		return res.map(this._transformHouse)
	}

	async getAllHouse(id) {
		const house = await this.getResource(`/houses/${id}`)
		return this._transformHouse(house, id)
	}

	async getAllBooks() {
		const res = await this.getResource(`/books`)
		return res.map(this._transformBook)
	}

	async getBook(id) {
		const book = await this.getResource(`/books/${id}/`)
		return this._transformBook(book, id)
	}

	_transformCharacter(char, id) {
		return {
					id: id,
					url: char.url,
					name: char.name,
					gender: char.gender,
					born: char.born,
					died: char.died,
					culture: char.culture
		}
	}

	_transformHouse(house, id) {
		return {
			id: id,
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord
		}
	}

	_transformBook(book, id) {
		return {
			id: id,
			name: book.name,
			authors: book.authors,
			numberOfPages: book.numberOfPages,
			publisher: book.publisher,
			country: book.country,
			mediaType: book.mediaType,
			released: book.released
		}
	}

}