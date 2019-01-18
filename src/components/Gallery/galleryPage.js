import React, { Component } from 'react';

import GalleryItems from './galleryItems';
import './galleryPage.css';

import JSON from '../../catalog.json';


class GalleryPage extends Component {

	state = {
		data: JSON
	}

	render(){
		return(
			<div className="gallery_wrapper">
				<GalleryItems data={this.state.data}/>
			</div>
		)
	}
}

export default GalleryPage;