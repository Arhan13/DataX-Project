import { Card } from "@material-ui/core"
import React from "react"
import "./Hover.css"
import threeDGraph from "../assets/3dGraph.jpeg"
import continousMcSimulationGraph from "../assets/continousMcSimulationGraph.jpeg"
import periodicMcSim from "../assets/periodicMcSim.jpeg"
import monteCarloContinuousReviewGraph from "../assets/monteCarloContinuousReviewGraph.jpeg"
import periodicMonteCarlo from "../assets/periodicMonteCarlo.jpeg"
import optimumPeriodicReviewStats from "../assets/optimumPeriodicReviewStats.jpeg"
import periodicReviewStats from "../assets/periodicReviewStats.jpeg"
import safetyStockForIndividualProduct from "../assets/safetyStockForIndividualProduct.jpeg"
import "./Stats.css"

export default function Stats() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "#333333",
				padding: "3%",
			}}>
			<h1 style={{color:"#fefefe"}}>MC Simulation Graph</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "space-between",
					textAlign: "center",
					color: "#333333",
					gap: "5vh",
				}}>
				<Card
					id="cart" 
					className="cardMui"
					style={{
						padding: "3% 10%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1 style={{color:"#203A43",fontWeight:"bold"}}>Continous Mc Simulation</h1>
					<img
						src={continousMcSimulationGraph}
						alt="continousMcSimulationGraph"
					/>
				</Card>
				<Card
					id="cart"
					className="cardMui"
					style={{
						padding: "3% 10%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1 style={{color:"#203A43",fontWeight:"bold"}}>Periodic Mc Simulation</h1>
					<img src={periodicMcSim} alt="continousMcSimulationGraph" />
				</Card>
			</div>

			<h1 style={{ marginTop: "5vh" , color:"white"}}>Monte Carlo Graphs</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "space-between",
					textAlign: "center",
					color: "#333333",
					gap: "5vh",
				}}>
				<Card
					id="cart"
					className="cardMui"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1 style={{color:"#203A43",fontWeight:"bold"}}>Monte Carlo Continuous Review Graph</h1>
					<img
						src={monteCarloContinuousReviewGraph}
						style={{ maxWidth: "95%", maxHeight: "auto" }}
						alt="continousMcSimulationGraph"
					/>
				</Card>
				<Card
					id="cart"
					className="cardMui"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1 style={{color:"#203A43",fontWeight:"bold"}}>Periodic Mc Simulation</h1>
					<img
						src={periodicMonteCarlo}
						style={{ maxWidth: "95%", maxHeight: "auto" }}
						alt="continousMcSimulationGraph"
					/>
				</Card>
			</div>

			<h1 style={{ marginTop: "5vh", color:"white" }}>Review Stats</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "space-between",
					textAlign: "center",
					color: "#333333",
					gap: "5vh",
				}}>
				<Card
					id="cart"
					className="cardMui"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1 style={{color:"#203A43",fontWeight:"bold"}}>Optimum Periodic Review Stats</h1>
					<img
						src={optimumPeriodicReviewStats}
						style={{ maxWidth: "95%", maxHeight: "auto" }}
						alt="continousMcSimulationGraph"
					/>
				</Card>
				<Card
					id="cart"
					className="cardMui"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1 style={{color:"#203A43",fontWeight:"bold"}}>Periodic Review Stats</h1>
					<img
						src={periodicReviewStats}
						style={{ maxWidth: "95%", maxHeight: "auto" }}
						alt="continousMcSimulationGraph"
					/>
				</Card>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "space-between",
					textAlign: "center",
					color: "#333333",
					gap: "5vh",
					marginTop: "5vh",
				}}>
				<Card
					id="cart"
					className="cardMui"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1 style={{color:"#203A43",fontWeight:"bold"}}>3D Graph</h1>
					<img
						src={threeDGraph}
						style={{ maxWidth: "95%", maxHeight: "auto" }}
						alt="continousMcSimulationGraph"
					/>
				</Card>
				<Card
					id="cart"
					className="cardMui"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1 style={{color:"#203A43",fontWeight:"bold"}}>Safety Stock For Individual Product</h1>
					<img
						src={safetyStockForIndividualProduct}
						style={{ maxWidth: "95%", maxHeight: "auto" }}
						alt="continousMcSimulationGraph"
					/>
				</Card>
			</div>
		</div>
	)
}
