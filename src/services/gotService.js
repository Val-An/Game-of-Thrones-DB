import React from 'react'

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

	getAllCharacters() {
		return this.getResource(`/characters?page=1&pageSize=10`)
	}

	getCharacter(id) {
		return this.getResource(`/characters/${id}`)
	}

	getAllHouses() {
		return this.getResource(`/houses`)
	}

	getAllBooks() {
		return this.getResource(`/books`)
	}

}