import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Staking from "./pages/Staking"
import Stats from "./pages/Stats"
import Profile from "./pages/Profile"
import GlobalSpinner from "./components/GlobalSpinner/GlobalSpinner"
import About from "./pages/About"

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/" component={Profile} exact />
				<Route path="/about" component={About} exact />
				<Route path="/manage" component={Staking} exact />
				<Route path="/stats" component={Stats} exact />
			</Switch>
			<div style={{ position: "fixed", bottom: "70px", right: "100px" }}>
				<GlobalSpinner />
			</div>
		</div>
	)
}

export default App
