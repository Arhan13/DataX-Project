import { Card } from "@material-ui/core"
import React from "react"
import prod1freq from "../assets/prod1-freq.jpeg"
import prod2freq from "../assets/prod2-freq.jpeg"
import prod3freq from "../assets/prod3-freq.jpeg"
import prod4freq from "../assets/prod4-freq.jpeg"
import productDemand from "../assets/productDemand.jpeg"
import productInfo from "../assets/productInfo.jpeg"
import storeTiming from "../assets/store_timing.jpg"
import storeName from "../assets/store_name.jpg"
import storeLocation from "../assets/store_location.jpg"
import owner from "../assets/owner.jpg"
import GST from "../assets/GST.jpg"

import "./Profile.css"

export default function Profile() {
	return (
		<div
			style={{
				marginTop: "10vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "black",
			}}>
			<h1 style={{color:"#fefefe"}}>Store Overview</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "space-between",
					gap: "1rem",
					textAlign: "center",
					color: "#333333",
				}}>
				<div id="carta">
					<img style={{ height:"400px", width:"300px"}} src={storeName} width="300px" />
					<h1>Shop Name</h1>
					<i>"Optimum Store"</i>
				</div>
				<div id="carta">
					<img style={{ height:"400px", width:"300px"}} src={storeLocation} width="300px" />
					<h1>Location</h1>
					<i>"4987 Wilson Avenue, Irving, Texas"</i>
				</div>
				<div id="carta">
					<img style={{ height:"400px", width:"300px"}} src={storeTiming} width="300px" />
					<h1>Timing</h1>
					<i>"Morning - 9am to 2pm & Evening : 3pm - 6pm"</i>
				</div>
				<div id="carta">
					<img style={{ height:"400px", width:"300px"}} src={owner} width="300px" />
					<h1>Owner Name</h1>
					<i>"Mr John Doe"</i>
				</div>
				<div id="carta">
					<img style={{ height:"400px", width:"300px"}} src={GST} width="300px" />
					<h1>GST business number</h1>
					<i>"CGBPC2115F"</i>
				</div>
			</div>
			{/* <div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "space-between",
					gap: "1rem",
					textAlign: "center",
					color: "#333333",
				}}>
				<Card
					className="cardMui"
					style={{
						width: "20rem",
						height: "10rem",
						padding: "3%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1>Shop Name</h1>
					<h2>Optimum Store</h2>
				</Card>
				<Card
					className="cardMui"
					style={{
						width: "20rem",
						height: "10rem",
						padding: "3%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1>Location</h1>
					<h2>4987 Wilson Avenue, Irving, Texas</h2>
				</Card>
				<Card
					className="cardMui"
					style={{
						width: "20rem",
						height: "10rem",
						padding: "3%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1>Timings</h1>
					<h2>Morning - 9am to 2pm & Evening : 3pm - 6pm</h2>
				</Card>
				<Card
					className="cardMui"
					style={{
						width: "20rem",
						height: "10rem",
						padding: "3%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1>Owner Name</h1>
					<h2>Mr. John Doe</h2>
				</Card>
				<Card
					className="cardMui"
					style={{
						width: "20rem",
						height: "10rem",
						padding: "3%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "20px",
					}}>
					<h1>GST business number</h1>
					<h2>CGBPC2115F</h2>
				</Card>
			</div> */}
			<h1 style={{ marginTop: "3rem", marginBottom: "1rem", color:"#fefefe"}}>Product Details</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "1rem",
					textAlign: "center",
					color: "#333333",
				}}>
				<Card className="cardMui" id="carta">
					<h2 style={{color:"#fefefe"}}>Product 1</h2>
					<img src={prod1freq} style={{width:"400px", height:"300px"}} alt="continousMcSimulationGraph" />
				</Card>
				<Card className="cardMui" id="carta">
					<h2 style={{color:"#fefefe"}}>Product 2</h2>
					<img src={prod2freq} style={{width:"400px", height:"300px"}} alt="continousMcSimulationGraph" />
				</Card>
				<Card className="cardMui" id="carta">
					<h2 style={{color:"#fefefe"}}>Product 3</h2>
					<img src={prod3freq} style={{width:"400px", height:"300px"}} alt="continousMcSimulationGraph" />
				</Card>
				<Card className="cardMui" id="carta">
					<h2 style={{color:"#fefefe"}}>Product 4</h2>
					<img src={prod4freq} style={{width:"400px", height:"300px"}} alt="continousMcSimulationGraph" />
				</Card>
			</div>
			<h1 style={{ marginTop: "3rem", marginBottom: "1rem", color:"#fefefe"}}>
				Product Demand
			</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "1rem",
					textAlign: "center",
					color: "#333333",
				}}>
				<Card className="cardMui" id="carta" style={{width:"1100px"}}>
					<h2 style={{color:"#fefefe"}}>Product Demand</h2>
					<img src={productDemand} alt="continousMcSimulationGraph" />
				</Card>
			</div>
			<h1 style={{ marginTop: "3rem", marginBottom: "1rem", color:"#fefefe"}}>Product Info</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "1rem",
					textAlign: "center",
				}}>
				<Card
					className="cardMui"
					id="carta" style={{width:"1100px"}}>
					<h2 style={{color:"#fefefe"}}>Product Info</h2>
					<img src={productInfo} alt="continousMcSimulationGraph" />
				</Card>
			</div>
		</div>
	)
}
