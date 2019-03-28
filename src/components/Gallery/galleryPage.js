import React, { Component } from 'react';

import GalleryItems from './galleryItems';
import Footer from '../Footer/footer';
import './galleryPage.css';

import JSON from '../../catalog.json';


class GalleryPage extends Component {

	state = {
		data: JSON,
		filteredData:[],
		uniqCat: []
	}

	componentWillMount = () => {
		let allCategories = [];

		this.state.data.catalog.map( (site) => {
			site.category.map( (item) => {
				return allCategories.push(item)
			})
		})

		let uniqCat = [...new Set(allCategories)]
		let shuffledData = this.shuffleArray(this.state.data.catalog);

		this.setState({
			data: shuffledData,
			uniqCat
		});
	}

	shuffleArray = (array) => {
	    let ctr = array.length, temp, index;

	    while (ctr > 0) {
	        index = Math.floor(Math.random() * ctr);
	        ctr--;
	        temp = array[ctr];
	        array[ctr] = array[index];
	        array[index] = temp;
	    }
	    return array;
	}


	renderCategories = () => {
		const categoryItems = this.state.uniqCat.map( (item,i) => {
			return (
				<li
					key={i}
					onClick={this.filterHandler}
					className="ready"
					item={item}
				>
					{item}
				</li>
			)
		})

		return (
			this.state.uniqCat.length > 1 ?
			<div className="category_header">
				<ul>
					{categoryItems}
				</ul>
			</div>
			:
			<div className="category_header">
				"Category1 | Category2 | Category3 | Category4"
			</div>
		)
	}

	filterHandler = e => {
		e.target.classList.toggle('active');
		e.target.classList.toggle('ready');
		// this.filterData(this.props.item);
	}

	filterData = item => {
		let filteredData = [];
		
		if(item.hasClass("ready")){
			console.log("workie workie jerky");

			// .removeClass("ready").addClass("active");

			// this.state.data.filter( (item) => {
			// 	if(item.category.includes(keyword)) {
			// 		return filteredData.push(item)
			// 	} else {
			// 		console.log("rejected")
			// 	}
			// })

			// this.setState({
			// 	filteredData
			// })
		}
		else {
			console.log("no workie");

			// .removeClass("active").addClass("ready");

			// this.state.data.filter( (item) => {
			// 	if(item.category.includes(keyword)) {
			// 		return filteredData.push(item)
			// 	} else {
			// 		console.log("rejected")
			// 	}
			// })
		}

	}

	render(){
		return(
			<div className="page">
				{this.renderCategories()}
				<GalleryItems data={this.state.data} filteredData={this.state.filteredData}/>
				<Footer />
			</div>
		)
	}
}

export default GalleryPage;