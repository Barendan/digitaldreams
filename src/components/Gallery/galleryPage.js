import React, { Component } from 'react';

import GalleryItems from './galleryItems';
import './galleryPage.css';

import JSON from '../../catalog.json';


class GalleryPage extends Component {


	state = {
		data: []
	}

	render(){
		console.log(JSON)
		return(
			<div>
				<GalleryItems />
			</div>
		)
	}
}

export default GalleryPage;