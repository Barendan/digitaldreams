import React from 'react';
import Slick from 'react-slick';


const GalleryItems = (props) => {

	let template = null;
	let catalog = props.data.catalog;

	const settings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		sldiesToScroll: 1,
		...props.settings
	}
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
		<Slick {...settings} >
			{template}
		</Slick>
	)
}


export default GalleryItems