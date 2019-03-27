import React from 'react';
import ShadowScrollbar from './Scrollbar/shadowScrollbar';

// import Slick from 'react-slick';


const GalleryItems = (props) => {

	let template = null;
	let catalog = props.data;
	let filtered = props.filteredData;

	// console.log(filtered);


	if(filtered.length < 1){
		template = catalog.map( (item, i) => {
			return(
				<div className="display_item" key={item.id} >
					<div className="display_image"
						 style= {{
						 	background:`url(../images/${item.image})`,
						 	width: "200px",
						 	height: "131px",
						 	backgroundSize: "contain"
						}}
					>
					</div>
					<a link href={item.link} target="_blank" rel="noopener noreferrer">
						<div className="info_container">
							<div className="display_info">
								<b>{item.title}</b><br/>
								<i>{item.description}</i>
							</div>
						</div>
					</a>
				</div>
			)
		})
	} else {
		template = filtered.map( (item, i) => {
			return(
				<div className="display_item" key={item.id} >
					<div className="display_image"
						 style= {{
						 	background:`url(../images/${item.image})`,
						 	width: "200px",
						 	height: "131px",
						 	backgroundSize: "contain"
						}}
					>
					</div>
					<a link href={item.link} target="_blank" rel="noopener noreferrer">
						<div className="info_container">
							<div className="display_info">
								<b>{item.title}</b><br/>
								<i>{item.description}</i>
							</div>
						</div>
					</a>
				</div>
			)
		})
	}

	return(
		<ShadowScrollbar
			style={{ 
				height:"71%",
				width:"67%",
				margin: "0 auto",
				marginBottom: '40px',
				backgroundColor: ""
		}}>
			<div className="gallery_wrapper">
				{template}
			</div>
		</ShadowScrollbar>
	)
}


export default GalleryItems