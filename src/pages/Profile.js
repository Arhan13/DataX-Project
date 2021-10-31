import { Card } from "@material-ui/core"
import CardHeader from "@mui/material/CardHeader"

import React from "react"
import prod1freq from "../assets/prod1-freq.jpeg"
import prod2freq from "../assets/prod2-freq.jpeg"
import prod3freq from "../assets/prod3-freq.jpeg"
import prod4freq from "../assets/prod4-freq.jpeg"
import productDemand from "../assets/productDemand.jpeg"
import productInfo from "../assets/productInfo.jpeg"

export default function Profile() {
	return (
		<div
			style={{
				marginTop: "10vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "#333333",
			}}>
			<h1>Store Overview</h1>
			<div
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
			</div>
			<h1>Product Details</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "1rem",
					textAlign: "center",
					color: "#333333",
				}}>
				<Card className="cardMui" style={{ borderRadius: "20px" }}>
					<h2>Product 1</h2>
					<img src={prod1freq} />
				</Card>
				<Card className="cardMui" style={{ borderRadius: "20px" }}>
					<h2>Product 2</h2>
					<img src={prod2freq} />
				</Card>
				<Card className="cardMui" style={{ borderRadius: "20px" }}>
					<h2>Product 3</h2>
					<img src={prod3freq} />
				</Card>
				<Card className="cardMui" style={{ borderRadius: "20px" }}>
					<h2>Product 4</h2>
					<img src={prod4freq} />
				</Card>
			</div>
			<h1 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
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
				<Card className="cardMui" style={{ borderRadius: "20px" }}>
					<h2>Product Demand</h2>
					<img src={productDemand} />
				</Card>
			</div>
			<h1 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Product Info</h1>
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
					style={{ borderRadius: "20px", marginBottom: "5rem" }}>
					<h2>Product Info</h2>
					<img src={productInfo} />
				</Card>
			</div>
		</div>
	)
}
