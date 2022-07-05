import { JSXElement, lazy } from 'solid-js';
import { render } from 'solid-js/web';
import {Routes, Route, Router} from 'solid-app-router';

import Index from './pages/index';
import About from './pages/about';
import './style.sass';


function App(): JSXElement {
	return  <>
		<Router>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<Routes>
				<Route path="/" component={Index}/>
				<Route path="/about" component={About}/>
			</Routes>
		</Router>
	</>
}


render(App, document.getElementById("app"));
