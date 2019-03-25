import React, { Component } from 'react';

import GalleryItems from './galleryItems';
import './galleryPage.css';

import JSON from '../../catalog.json';


class GalleryPage extends Component {

	state = {
		data: JSON,
		categories: []
	}

	componentWillMount = () => {

	}

	renderCategory = () => {
		let allCategories = [];

		this.state.data.catalog.map( (site) => {
			site.category.map( (item) => {
				allCategories.push(item)
			})
		})

		// console.log(allCategories)
		let uniqCategories = [...new Set(allCategories)]
		console.log(uniqCategories)

		const categoryList = [];
		uniqCategories.forEach((item,i) => categoryList.push(
			<li key={i}> {item} </li>
		))

		return (
			this.state.categories.length < 1 ?
			<div className="category_header">
				<ul>
					{categoryList}
				</ul>
			</div>
			:
			<div className="category_header">
				"Category1 | Category2 | Category3 | Category4"
			</div>
		)
	}

	render(){
		return(
			<div className="page">
				{this.renderCategory()}
				<GalleryItems data={this.state.data}/>
			</div>
		)
	}
}

export default GalleryPage;