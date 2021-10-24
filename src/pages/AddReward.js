import React, { useState } from "react"
import "./AddReward.css"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { addReward, approveReward } from "../web3/staking"
import { useWeb3React } from "@web3-react/core"
import { injected } from "../wallet/connector"
function AddReward() {
	const [total, setTotal] = useState(0)
	const [early, setEarly] = useState(0)

	const [isApproved, setIsApproved] = useState(false)
	const { account, active, activate } = useWeb3React()
	const handleRewardAdd = async () => {
		await addReward(
			total.toLocaleString("fullwide", { useGrouping: false }),
			early.toLocaleString("fullwide", { useGrouping: false }),
			account
		)
		setIsApproved(false)
	}
	const handleApprove = async () => {
		await approveReward(
			total.toLocaleString("fullwide", { useGrouping: false }),
			account
		)
		setIsApproved(true)
	}
	return (
		<div style={{ background: "#11ADDF", color: "white", height: "100vh" }}>
			<div className="parentContainerForm">
				<div
					style={{
						background: "white",
						height: "40vh",
						width: "50vh",
						borderRadius: "20px",
						marginTop: "20vh",
						padding: "3%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "center",
						gap: "3vh",
					}}>
					<h2 style={{ color: "black" }}>Add Reward</h2>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-start",
							width: "100%",
						}}>
						<TextField
							style={{ width: "100%" }}
							label="Total Reward"
							onChange={e => {
								setTotal(parseInt(e.target.value) * 1e18)
							}}
						/>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-start",
							width: "100%",
						}}>
						<TextField
							style={{ width: "100%" }}
							label="withdrawable"
							onChange={e => {
								setEarly(parseInt(e.target.value) * 1e18)
							}}
						/>
					</div>
					{active ? (
						<>
							{isApproved ? (
								<Button
									variant="contained"
									onClick={handleRewardAdd}
									style={{
										width: "100%",
										marginTop: "5vh",
										background: "#10ACDE",

										borderRadius: "5px",
									}}>
									Submit
								</Button>
							) : (
								<Button
									variant="contained"
									onClick={handleApprove}
									style={{
										width: "100%",
										marginTop: "5vh",
										background:
											"linear-gradient(141deg, rgb(165, 77, 170) 0%, rgb(27, 119, 205) 100%)",
										borderRadius: "5px",
									}}>
									Approve
								</Button>
							)}
						</>
					) : (
						<Button
							variant="contained"
							onClick={() => {
								activate(injected)
							}}
							style={{
								width: "100%",
								marginTop: "5vh",
								background:
									"linear-gradient(141deg, rgb(165, 77, 170) 0%, rgb(27, 119, 205) 100%)",
								borderRadius: "5px",
							}}>
							Connect Wallet
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}

export default AddReward
