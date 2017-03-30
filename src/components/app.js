import { h, Component } from 'preact';
import { Router } from 'preact-router';


import Home from './home';
import Footer from './footer/index.js'
import Container from './container/index.js'

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id = "app">
				<Router onChange={this.handleRoute}>
					<Container path="/" />
				</Router>
                <Home />
				<Footer />
			</div>

		);
	}
}
