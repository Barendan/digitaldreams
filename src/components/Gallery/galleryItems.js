import React from 'react';
import ShadowScrollbar from './Scrollbar/shadowScrollbar';

// import Slick from 'react-slick';


const GalleryItems = (props) => {

	let template = null;
	let catalog = props.data.catalog;

	// console.log(catalog)

	if(catalog){
		template = catalog.map( (item, i) => {
			return(
				<div className="display_item">
					<div key={i}  className="display_image"
						 style= {{
						 	background:`url(../images/${item.image})`,
						 	width: "200px",
						 	height: "131px",
						 	backgroundSize: "contain"
						}}
					>
					</div>
					<div className="display_title">
						{item.title}
					</div>
				</div>
			)
		})
	} else {
		template = (<div>Where is the template doe</div>);
	}

	return(
		<ShadowScrollbar
			style={{ 
				height:"80%",
				width:"67%",
				margin: "0 auto",
				backgroundColor: ""
		}}>
			<div className="gallery_wrapper">
				{template}
			</div>
		</ShadowScrollbar>
	)
}


export default GalleryItems