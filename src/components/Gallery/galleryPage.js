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

	// While there are elements in the array
	    while (ctr > 0) {
	// Pick a random index
	        index = Math.floor(Math.random() * ctr);
	// Decrease ctr by 1
	        ctr--;
	// And swap the last element with it
	        temp = array[ctr];
	        array[ctr] = array[index];
	        array[index] = temp;
	    }
	    return array;
	}


	renderCategories = () => {
		let uniqCat = this.state.uniqCat;

		const categoryItems = [];
		uniqCat.forEach((item,i) => categoryItems.push(
			<button
				key={i}
				onClick={this.filterData(item)}
				className="categoryButton"
			>
				<li data-hover={item}> {item} </li>
			</button>
		))

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

	filterData = (keyword) => (e) => {
		e.preventDefault();
		let filteredData = [];

		this.state.data.catalog.filter( (item) => {
			if(item.category.includes(keyword)) {
				return filteredData.push(item)
			} else {
				console.log("rejected")
			}
		})

		this.setState({
			filteredData
		})
		// console.log(this.state.filteredData);
		// console.log(filteredData);
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