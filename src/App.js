import "./App.css"
import Navbar from "./components/Navbar"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Staking from "./pages/Staking"
import Stats from "./pages/Stats"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Home from "./pages/Home"

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/profile" component={Profile} exact />
					<Route path="/about" component={About} exact />
					<Route path="/manage" component={Staking} exact />
					<Route path="/stats" component={Stats} exact />
					<Route path="/" component={Home} exact />
				</Switch>
			</div>
		</Router>
	)
}

export default App
