import React, { Component } from 'react';

import './homePage.css';


class Home extends Component {

	state = {

	}

	render(){
		return(
			<div className="page home">
				<div className="home-wrapper">

					<h1>Design / <br/>
						Innovation.
					</h1>

					<div className="intro">
						<p>
							Creativity. Some say it is humanities definiting trait.
							The internet has allowed us to access the creative power of millions of people all over the world.
						</p>
						<p>
							Clarity. Taking millions of pieces of data is of no use if you can not sort it and organize it accordingly. Take control with just one click!
						</p>
					</div>

					<span className="links">
						<a href="https://www.typewolf.com">TypeWolf</a>
						<a href="https://www.csswinner.com/winners">CSS Winner</a>
						<a href="https://www.awwwards.com/">Awwwards</a>
						<a href="https://coolors.co">Coolors</a>
					</span>

				</div>
			</div>
		)
	}
}

export default Home;