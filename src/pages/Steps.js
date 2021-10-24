import * as React from "react"
import PropTypes from "prop-types"
import { styled } from "@mui/material/styles"
import Stack from "@mui/material/Stack"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Check from "@mui/icons-material/Check"
import { useHistory } from "react-router-dom"
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector"
import { injected } from "../wallet/connector"
import Button from "@mui/material/Button"
import { stake, approve, getStakingDetails } from "../web3/staking"
import { useWeb3React } from "@web3-react/core"
import { useSpinner } from "../context/Context"
import "react-circular-progressbar/dist/styles.css"
import "./Staking.css"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import Countdown from "react-countdown"
import { Card, Grid, Item } from "@mui/material"

const percentage = 66

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
	color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
	display: "flex",
	height: 22,
	alignItems: "center",
	...(ownerState.active && {
		color: "#784af4",
	}),
	"& .QontoStepIcon-completedIcon": {
		color: "#784af4",
		zIndex: 1,
		fontSize: 18,
	},
	"& .QontoStepIcon-circle": {
		width: 8,
		height: 8,
		borderRadius: "50%",
		backgroundColor: "currentColor",
	},
}))

function QontoStepIcon(props) {
	const { active, completed, className } = props

	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{completed ? (
				<Check className="QontoStepIcon-completedIcon" />
			) : (
				<div className="QontoStepIcon-circle" />
			)}
		</QontoStepIconRoot>
	)
}

QontoStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 22,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage:
				"linear-gradient(141deg,rgba(16, 172, 222, 1) 0%,rgb(27, 119, 205) 100%)",
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage:
				"linear-gradient(141deg,rgba(16, 172, 222, 1) 0%,rgb(27, 119, 205) 100%)",
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 3,
		border: 0,
		backgroundColor:
			theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
		borderRadius: 1,
	},
}))

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
	backgroundColor:
		theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
	zIndex: 1,
	color: "#fff",
	width: 50,
	height: 50,
	display: "flex",
	borderRadius: "50%",
	justifyContent: "center",
	alignItems: "center",
	...(ownerState.active && {
		background: "#10ACDE",
		boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
	}),
	...(ownerState.completed && {
		background: "#10ACDE",
	}),
}))

function ColorlibStepIcon(props) {
	const { active, completed, className } = props

	const icons = {
		1: 1,
		2: 2,
		3: 3,
		4: 4,
	}

	return (
		<ColorlibStepIconRoot
			ownerState={{ completed, active }}
			className={className}>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	)
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
}

const steps = ["Stake", "Approve", "Confirm", "Done"]
const Completionist = () => (
	<span className="countdown-timer">
		<div className="outer-box grey">
			Days
			<br />
			<div className="box blue">00</div>
		</div>
		<div className="outer-box grey">
			Hours
			<br />
			<div className="box blue">00</div>
		</div>
		<div className="outer-box grey">
			Minutes
			<br />
			<div className="box blue">00</div>
		</div>
		<div className="outer-box grey">
			Seconds
			<br />
			<div className="box blue">{"00"} </div>
		</div>
	</span>
)
const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render a completed state
		return <Completionist />
	} else {
		// Render a countdown
		return (
			<span className="countdown-timer">
				<div className="outer-box grey">
					Days
					<br />
					<div className="box blue">{days} </div>
				</div>
				<div className="outer-box grey">
					Hours
					<br />
					<div className="box blue">{hours} </div>
				</div>
				<div className="outer-box grey">
					Minutes
					<br />
					<div className="box blue">{minutes} </div>
				</div>
				<div className="outer-box grey">
					Seconds
					<br />
					<div className="box blue">{seconds} </div>
				</div>
			</span>
		)
	}
}
export default function CustomizedSteppers() {
	const [maturityTime, setMaturityTime] = React.useState(0)
	const history = useHistory()
	const [activeStep, setActiveStep] = React.useState(0)
	const [amount, setAmount] = React.useState(0)
	const [stakingProgressBarData, setStakingProgressBarData] = React.useState({
		total: 0,
		cap: 0,
		stakingEnds: 0,
	})
	const [timeRemainingComponent, setTimeRemainingComponent] = React.useState("")
	const { account, active, activate } = useWeb3React()
	const spinner = useSpinner()
	const handleStake = async () => {
		// console.log(receipt)
		spinner.setLoadingState(true)
		try {
			const stake_receipt = await stake(
				amount.toLocaleString("fullwide", { useGrouping: false }),
				account
			)
			setActiveStep(3)
		} catch (err) {
			spinner.setLoadingState(false)
			setActiveStep(4)
		}
		spinner.setLoadingState(false)
	}
	const handleApprove = async () => {
		spinner.setLoadingState(true)
		try {
			const receipt = await approve(
				amount.toLocaleString("fullwide", { useGrouping: false }),
				account
			)
		} catch (err) {
			spinner.setLoadingState(false)
		}
		spinner.setLoadingState(false)
	}

	const init = async () => {
		const _stakingDetails = await getStakingDetails()
		const { stakedTotal, stakingCap, withdrawEnds, stakingEnds } =
			_stakingDetails
		setStakingProgressBarData({
			total: stakedTotal,
			cap: stakingCap,
			stakingEnds: stakingEnds,
		})
		setMaturityTime(stakingEnds)
		spinner.setLoadingState(true)
		setTimeRemainingComponent(
			<Countdown
				date={new Date(1635096119 * 1000)}
				renderer={renderer}
				style={{ color: "black" }}
			/>
		)
		spinner.setLoadingState(false)
	}
	React.useEffect(() => {
		if (active) {
			init()
		}
	}, [active, account])
	React.useEffect(() => {
		console.log(stakingProgressBarData.cap, stakingProgressBarData.total)
	}, [stakingProgressBarData.total, stakingProgressBarData.cap])
	return (
		<>
			<div
				style={{
					backgroundColor: "#11ADDF",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "10vh",
					marginTop: "7vh",
				}}>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<div
							style={{
								maxWidth: "100%",
								maxHeight: "20vh",
								marginTop: "40vh",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								gap: "5vh",
							}}>
							<div>
								{
									<>
										{active && (
											<div
												style={{
													display: "flex",
													flexDirection: "column",
													justifyContent: "center",
													alignItems: "center",
													color: "#ffff",
													textAlign: "left",
												}}>
												<div>
													<p
														style={{
															fontSize: "3rem",
															fontWeight: "800",
															marginLeft: "3rem",
														}}>
														LUX
													</p>
													<p
														style={{
															fontSize: "3rem",
															fontWeight: "600",
															marginTop: "-1.5rem",
															marginLeft: "3rem",
														}}>
														Staking Pool
													</p>
													<p
														style={{
															fontSize: "2rem",
															marginTop: "1rem",
															fontWeight: "400",
															marginLeft: "3rem",
														}}>
														Staking Period
													</p>
													<div
														className="maturity"
														style={{
															marginLeft: "3rem",
															background: "white",
															color: "black",
															padding: "5%",
															height: "100%",
														}}>
														<div
															className="detailsWarpper"
															style={{ color: "black" }}>
															<div
																className="detailsLeft"
																style={{
																	color: "#10acde",
																	fontSize: "0.8rem",
																	fontWeight: "600",
																}}>
																Time remaining
															</div>
														</div>
														<div
															className="staking-terms-detail"
															style={{ color: "black", marginTop: "1rem" }}>
															{timeRemainingComponent}
														</div>
													</div>
												</div>
											</div>
										)}
									</>
								}
							</div>
						</div>
					</Grid>
					<Grid
						item
						xs={8}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Card
							style={{
								width: "42rem",
								height: "auto",
								borderRadius: "1.75rem",
								marginTop: "20vh",
								padding: "5%",
							}}>
							<Stack
								sx={{ width: "100%" }}
								spacing={4}
								style={{ height: "auto" }}>
								<Stepper
									alternativeLabel
									activeStep={activeStep}
									connector={<ColorlibConnector />}>
									{steps.map(label => (
										<Step key={label}>
											<StepLabel StepIconComponent={ColorlibStepIcon}>
												{label}
											</StepLabel>
										</Step>
									))}
								</Stepper>
								{activeStep === 0 && (
									<div
										style={{
											display: "flex",
											justifyContent: "flex-start",
											alignItems: "center",
											marginLeft: "3rem",
										}}>
										<div
											style={{
												background: "white",
												width: "50vh",
												borderRadius: "20px",
												padding: "2%",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												alignItems: "flex-start",
												width: "100%",
											}}>
											<p
												style={{
													fontWeight: "600",
													fontSize: "34px",
													width: "100%",
													color: "rgba(16, 172, 222, 1)",
												}}>
												Amount in DRF LP tokens
											</p>
											<input
												style={{
													borderColor: "rgba(196, 196, 196, 0.23)",
													backgroundColor: "rgba(196, 196, 196, 0.23)",
													width: "250px",
													borderRadius: "25px",
													height: "32px",
													paddingLeft: '10px',
                          							paddingRight: '10px',
												}}
												placeholder="DRF LP TOKENS"
												onChange={e => {
													setAmount(parseInt(e.target.value) * 1e18)
												}}
											/>
											{active ? (
												<Button
													variant="contained"
													onClick={() => {
														setActiveStep(1)
													}}
													style={{
														marginTop: "5vh",
														background: "rgba(16, 172, 222, 1)",
														borderRadius: "5px",
														fontWeight: "bold",
														borderRadius: "130px",
														fontSize: "1.1rem",
													}}>
													Continue
												</Button>
											) : (
												<Button
													variant="contained"
													onClick={() => {
														activate(injected)
													}}
													style={{
														marginTop: "5vh",
														background: "rgba(16, 172, 222, 1)",
														borderRadius: "5px",
														fontWeight: "bold",
														borderRadius: "130px",
														fontSize: "1.1rem",
													}}>
													Connect Wallet
												</Button>
											)}
										</div>
									</div>
								)}
								{activeStep === 1 && (
									<div
										style={{
											display: "flex",
											justifyContent: "flex-start",
											alignItems: "center",
											marginLeft: "3rem",
										}}>
										<div
											style={{
												background: "white",
												width: "50vh",
												height: "30vh",
												borderRadius: "20px",
												padding: "2%",
												display: "flex",
												flexDirection: "column",
												justifyContent: "flex-start",
												alignItems: "flex-start",
												color: "#10ACDE",
												width: "100%",
											}}>
											{/* <h1>Approve</h1> */}
											<h2>
												Do you want to approve allocation of{" "}
												{(amount / 1e18).toFixed(2)} DRF LP TOKENS to DRIFE
												Staking contract?
											</h2>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													gap: "10vh",
												}}>
												<Button
													variant="contained"
													onClick={async () => {
														await handleApprove()
														setActiveStep(2)
													}}
													style={{
														width: "50%",
														marginTop: "5vh",
														background: "#10ACDE",
														borderRadius: "20px",
														fontSize: "1.1rem",
													}}>
													Approve
												</Button>
												<Button
													variant="contained"
													style={{
														width: "50%",
														marginTop: "5vh",
														background: "#B2B2B2",
														borderRadius: "20px",
														fontSize: "1.1rem",
													}}>
													Cancel
												</Button>
											</div>
										</div>
									</div>
								)}

								{activeStep === 2 && (
									<div
										style={{
											display: "flex",
											justifyContent: "flex-start",
											alignItems: "center",
											marginLeft: "3rem",
										}}>
										<div
											style={{
												background: "white",
												width: "50vh",
												height: "30vh",
												borderRadius: "20px",
												padding: "2%",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												alignItems: "flex-start",
												color: "#10ACDE",
												width: "90%",
											}}>
											{/* <h1>Confirm</h1> */}
											<h2>
												You are about to stake {(amount / 1e18).toFixed(2)} DRF
												LP Tokens. Please submit your confirmation.
											</h2>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													gap: "10vh",
												}}>
												<Button
													variant="contained"
													onClick={async () => {
														await handleStake()
													}}
													style={{
														width: "50%",
														marginTop: "5vh",
														background: "#10ACDE",
														borderRadius: "20px",
														fontSize: "1.1rem",
													}}>
													Submit
												</Button>
												<Button
													variant="contained"
													style={{
														width: "50%",
														marginTop: "5vh",
														background: "#B2B2B2",
														borderRadius: "20px",
														fontSize: "1.1rem",
													}}>
													Cancel
												</Button>
											</div>
										</div>
									</div>
								)}
								{activeStep === 3 && (
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											marginLeft: "3rem",
										}}>
										<div
											style={{
												background: "white",
												height: "30vh",
												borderRadius: "20px",
												padding: "2%",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												alignItems: "center",
												color: "#333333",
											}}>
											<text
												style={{
													color: "rgba(16, 172, 222, 1)",
													fontStyle: "normal",
													fontWeight: "600",
													fontSize: "3rem",
												}}>
												Congratulations
											</text>
											<text
												style={{
													marginTop: "2rem",
													fontStyle: "normal",
													fontWeight: "600",
													fontSize: "1.5rem",
													color: "#10ACDE",
												}}>
												Your stake was successful!
											</text>
											<text
												style={{
													fontStyle: "normal",
													fontWeight: "600",
													fontSize: "1.5rem",
													color: "#10ACDE",
												}}>
												Amount staked:{" "}
												<span style={{ fontWeight: "bolder" }}>
													{(amount / 1e18).toFixed(2)} DRF
												</span>{" "}
												Tokens
											</text>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													gap: "10vh",
												}}>
												<Button
													variant="contained"
													style={{
														marginTop: "4vh",
														width: "100%",
														background:
															"linear-gradient(141deg, rgba(16, 172, 222, 1) 0%, rgb(27, 119, 205) 100%)",
														borderRadius: "130px",
														fontSize: "1rem",
														fontSize: "1.5rem",
														fontWeight: "bold",
														padding: "0 1.5rem",
													}}
													onClick={() => {
														//TODO redirect to homepage
														history.push("/")
													}}>
													Go to Dashboard
												</Button>
											</div>
										</div>
									</div>
								)}
								{activeStep === 4 && (
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											marginLeft: "3rem",
										}}>
										<div
											style={{
												background: "white",
												height: "30vh",
												borderRadius: "20px",
												padding: "2%",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												alignItems: "center",
												color: "#333333",
											}}>
											<text
												style={{
													color: "rgba(225, 55, 55, 1)",
													fontStyle: "normal",
													fontWeight: "600",
													fontSize: "2.5rem",
												}}>
												Oops! Something went wrong
											</text>
											<text
												style={{
													marginTop: "2rem",
													fontStyle: "normal",
													fontWeight: "600",
													fontSize: "1.5rem",
													color: "#10ACDE",
												}}>
												Your staking attempt was unsuccessful
											</text>
											<text
												style={{
													marginTop: "2rem",
													fontStyle: "normal",
													fontWeight: "600",
													fontSize: "1.5rem",
													color: "#10ACDE",
													marginTop: "-0.01rem",
												}}>
												Please try again
											</text>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													gap: "10vh",
												}}>
												<Button
													variant="contained"
													style={{
														marginTop: "4vh",
														width: "100%",
														background:
															"linear-gradient(141deg, rgba(16, 172, 222, 1) 0%, rgb(27, 119, 205) 100%)",
														borderRadius: "130px",
														fontSize: "1rem",
														fontSize: "1.5rem",
														fontWeight: "bold",
														padding: "0 1.5rem",
													}}
													onClick={() => {
														//TODO redirect to homepage
														history.push("/")
													}}>
													Go back
												</Button>
											</div>
										</div>
									</div>
								)}
							</Stack>
						</Card>
					</Grid>
				</Grid>
			</div>
		</>
	)
}
