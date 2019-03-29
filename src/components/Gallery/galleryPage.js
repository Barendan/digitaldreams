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
			return (
				site.category.map( (item) => {
					return allCategories.push(item)
				})
			)
		})
		let uniqCat = [...new Set(allCategories)]
		
		let shuffledData = this.shuffleArray(this.state.data.catalog);
		this.setState({
			uniqCat,
			data: shuffledData
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

	filterHandler = (keyword) => e => {
		this.filterData(e,keyword);

		e.target.classList.toggle('active');
		e.target.classList.toggle('ready');
	}

	filterData = (e, keyword) => {
		let filteredData = this.state.filteredData;
		let incomingData = [];
		let itemClass = e.target.classList;

		if(itemClass.contains('ready')){
			incomingData = this.state.data.filter( (item) => {
				return item.category.includes(keyword)
			})
			this.setState({ filteredData: [...filteredData,...incomingData] })
		}
		else {
			incomingData = this.state.filteredData.filter( (item) => {
				return !item.category.includes(keyword)
			})
			!incomingData ? 
				this.setState({ filteredData: [] })
			:			
				this.setState({ filteredData: incomingData })
		}
	}

	render(){
		return(
			<div className="page">
				<div className="category_header">
					<ul>
					{this.state.uniqCat.map( (item,i) => {
						return (
							<li
								key={i}
								onClick={this.filterHandler(item)}
								className="ready"
								item={item}
							>
								{item}
							</li>
						)
					})}
					</ul>
				</div>

				<GalleryItems data={this.state.data} filteredData={this.state.filteredData}/>
				<Footer />
			</div>
		)
	}
}

export default GalleryPage;