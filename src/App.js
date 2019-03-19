import React from 'react';

import HomePage from './components/Home/homePage';
import GalleryPage from './components/Gallery/galleryPage';
import Footer from './components/Footer/footer';

import ReactFullpage from '@fullpage/react-fullpage';
import "fullpage.js/vendors/scrolloverflow";

const pluginWrapper = () => {
  // require('fullpage.js/vendors/scrolloverflow')
  // require('./statics/fullpage.scrollHorizontally.min');
};

const App = () => (
	<ReactFullpage
		navigation
		render={({ state, fullpageApi }) => {
			return (
				<ReactFullpage.Wrapper>
				    <div>
				    	<div className="logo">
				    		Digital Dreams TM
				    	</div>
				    	<div className="section">
							<HomePage />
						</div>
				    	<div className="section">
							<GalleryPage />
						</div>
						<Footer />
				    </div>
				</ReactFullpage.Wrapper>
			);
		}}
	/>
)

export default App;