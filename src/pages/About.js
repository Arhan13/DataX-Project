import React from "react"
import "./About.css"
export default function About() {
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
			<h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>About</h1>
			<p style={{ width: "80%", fontSize: "2rem" }}>
				Optimum Store makes inventory management as easy as it can ever get.
				Being a shopkeeper you know the pain of keeping logs of what is sold,
				what is brought from the manufacturer, and ofcourse how much to buy to
				get maximum profits. Optimum store alerts you whenever your stock goes
				below a certain amount, so that you do not lose a potential customer. It
				tells you how much to buy so that you do not buy less or more, optimum
				is the term we prefer. It also gives you the feature to periodically
				look into your stock and purchase accordingly.
			</p>
		</div>
	)
}
