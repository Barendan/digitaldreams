import React, { Component } from 'react';

import GalleryItems from './galleryItems';
import './galleryPage.css';

import JSON from '../../catalog.json';


class GalleryPage extends Component {

	state = {
		data: JSON,
		categories:[]
	}

	componentWillMount = () => {
		let catalog = this.state.data.catalog;
		catalog.map((item,i) =>{
			// console.log(item.category)
		})
	}

	render(){
	// console.log(catalog);
		return(
			<div className="page">
				<div className="category_header" 
					 options={this.state.categories}>
					 Category1 | Category2 | Category3 | Category4
				</div>
				<GalleryItems data={this.state.data} />
			</div>
		)
	}
}

export default GalleryPage;