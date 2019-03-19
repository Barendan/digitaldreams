import React from 'react';
// import Slick from 'react-slick';


const GalleryItems = (props) => {

	let template = null;
	let catalog = props.data.catalog;

	// console.log(catalog)

	if(catalog){
		template = catalog.map( (item, i) => {
			return(
				<div key={i}  className="display_image"
					 style= {{
					 	background:`url(../images/${item.image})`,
					 	width: "180px",
					 	height: "150px",
					 	backgroundSize: "cover"
					}}
				>
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
		<div className="gallery_wrapper">
			{template}
		</div>
	)
}


export default GalleryItems