import React from "react"
import { injected } from "../../wallet/connector"
import { useWeb3React } from "@web3-react/core"
import { Link } from "react-router-dom"
import drifeLogo from "../../assets/drifeLogo.jpeg"
import "../../pages/Staking.css"
const CHAINS = {
	RINKEBY: 4,
	BSC_MAINNET: 56,
}
function Navbar() {
	const { active, account, chainId, library, connector, activate, deactivate } =
		useWeb3React()
	const handleConnect = async () => {
		console.log("trying to connect")
		activate(injected)
	}
	return (
		<header>
			<div className="container-fluid nopadding">
				<nav>
					<Link to="/">
						<img
							src={drifeLogo}
							style={{ width: "3rem", height: "3rem", marginTop: "0.5rem" }}
						/>
					</Link>
					<a href="#" className="hamburger-menu">
						<span></span>
						<span></span>
						<span></span>
					</a>

					<div className="menu-item clearfix">
						<ul className="menu-ul clearfix">
							<li>
								<Link to="/about" className="location-anchor">
									<div style={{ fontSize: "1.2rem" }}>About</div>
								</Link>
							</li>
							<li>
								<Link to="/manage" className="location-anchor">
									<div style={{ fontSize: "1.2rem" }}>Manage</div>
								</Link>
							</li>
							<li>
								<Link to="/stats" className="location-anchor">
									<div style={{ fontSize: "1.2rem" }}>Stats</div>
								</Link>
							</li>
						</ul>
					</div>

					<div className="slide-menu-overlay"></div>

					<div className="slide-menu">
						<a href="javascript:void(0)" className="close-slide-menu">
							<i className="far fa-times-circle"></i>
						</a>

						<ul className="menu-ul clearfix">
							<li>
								<a href="#aboutsection" className="location-anchor">
									About
								</a>
							</li>
							<li>
								<a href="#what-nav" className="location-anchor">
									Story
								</a>
							</li>
							<li>
								<a href="#roadmap-nav" className="location-anchor last-child">
									Roadmap
								</a>
							</li>
							<li>
								<a href="#faq-nav" className="location-anchor">
									FAQ
								</a>
							</li>
						</ul>

						<div className="">
							<a
								href="javascript:void(0)"
								className="create-account-button button-hover-blue location-anchor uppercase">
								<span>Connect</span>
							</a>

							<div className="clearfix"></div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
