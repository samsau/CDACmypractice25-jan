import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import React from "react";
function App() {
	return (
		<div>
			<Router>
				<Link to="/">Home</Link> | <Link to="/page1">Page1</Link> |
				<Link to="/page2">Page2</Link> | <Link to="/page3">Page3</Link>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/page1" component={Page1}>
					{/* <Page1 /> */}
				</Route>
				<Route exact path="/page2" component={Page2}>
					{/* <Page2 /> */}
				</Route>
				<Route exact path="/page3" component={Page3}>
					{/* <Page3 /> */}
				</Route>
			</Router>
		</div>
	);
}

function Home() {
	return <div>Home</div>;
}
function Page1() {
	return <div>Page1</div>;
}
function Page2() {
	return <div>Page2</div>;
}
function Page3() {
	return <div>Page3</div>;
}
export default App;
