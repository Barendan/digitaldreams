import React, { Component } from 'react';

import GalleryItems from './galleryItems';
import CategoryDisplay from './categoryDisplay'
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
			console.log(item.category)
		})
	}


	// categories = this.state.data.map((item, i) =>{
	// 	console.log(item)
	// })

	render(){
	// console.log(catalog);
		return(
			<div>
				<CategoryDisplay options={this.state.categories}/>
				<div className="gallery_wrapper">
					<GalleryItems data={this.state.data}/>
				</div>
			</div>
		)
	}
}

export default GalleryPage;