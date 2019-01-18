import React from 'react';
// import Slick from 'react-slick';


const GalleryItems = (props) => {

	let template = null;
	let catalog = props.data.catalog;

	// console.log(catalog)

	if(catalog){
		template = catalog.map( (item, i) => {
			return(
				<div key={i} className="gallery_template">
					<a href={item.link}>
						<div className="display_image" 
							 style= {{ 
							 	background:`url(../images/${item.image})`
							}}
						>
							<div className="display_title">
								{item.title}
							</div>
						</div>
					</a>
				</div>
			)
		})
	} else {
		template = (<div>Where is the template doe</div>);
	}

	return(
		<div>
			{template}
		</div>
	)
}


export default GalleryItems