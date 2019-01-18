import React, { Component } from 'react';

import './homePage.css';


class Home extends Component {

	state = {

	}

	render(){
		return(
			<div className="page">
				<div className="home-wrapper">
					<div className="home-main">
						<h1>Design / <br/>
							Innovation.
						</h1>
						<p className="intro">
							The especially formulated taste of greatness.
							Working with us, you will discover the space where design meets excellence.
							We focus on the client's biggest desires and turn them into heavenly fantasies.
						</p>
						<span className="links">
							<a href="#">Explore Now</a>
							<a href="#">The Creator</a>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;