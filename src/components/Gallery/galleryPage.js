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
		return(
			this.state.categories.length > 1 ? "Final List" :
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