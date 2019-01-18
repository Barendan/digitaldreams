import React from 'react';
import Slick from 'react-slick';


const GalleryItems = (props) => {

	let template = null;
	const settings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		sldiesToScroll: 1,
		...props.settings
	}

	switch(props.type){
		case ('website'):
			template = props.data.map( (item, i) => {
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
			break;
		// case ('picture'):
		// 	template = null;
		// 	break;
		default:
			template = null;
	}

	return(
		<Slick {...settings} >
			{template}
		</Slick>
	)
}


export default GalleryItems