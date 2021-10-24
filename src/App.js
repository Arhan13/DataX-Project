import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Staking from "./pages/Staking"
import Home from "./pages/Home"
import AddReward from "./pages/AddReward"
import Steps from "./pages/Steps"
import GlobalSpinner from "./components/GlobalSpinner/GlobalSpinner"

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/" component={Staking} exact />
				<Route path="/staking" component={Steps} />
				<Route path="/addReward" component={AddReward} />
			</Switch>
			<div style={{ position: "fixed", bottom: "70px", right: "100px" }}>
				<GlobalSpinner />
			</div>
		</div>
	)
}

export default App
