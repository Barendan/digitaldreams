import React from 'react';

import HomePage from './components/Home/homePage';
import GalleryPage from './components/Gallery/galleryPage';

// import ReactFullpage from '@fullpage/react-fullpage';
// import "fullpage.js/vendors/scrolloverflow";


const App = () => (
      <div>
        <HomePage />
        <GalleryPage />		
      </div>
)



// const App = () => (
// 	<ReactFullpage
// 		navigation
// 		normalScrollElements= '.gallery_wrapper'
// 		render={({ state, fullpageApi }) => {
// 			return (
// 				<ReactFullpage.Wrapper>
// 				    <div>
// 				    	<div className="logo">
// 				    		Digital Dreams TM
// 				    	</div>
// 				    	<div className="section">
// 							<HomePage />
// 						</div>
// 				    	<div className="section">
// 							<GalleryPage />
// 						</div>
// 						<Footer />
// 				    </div>
// 				</ReactFullpage.Wrapper>
// 			);
// 		}}
// 	/>
// )

export default App;