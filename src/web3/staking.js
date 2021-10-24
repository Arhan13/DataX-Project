import Web3 from "web3"
import STAKING_ABI from "../abi/FestakedWithReward"
import IERC20ABI from "../abi/IERC20"
import CONFIG from "./config"
export const STAKING_CONTRACT_ADDRESS = CONFIG.STAKING_CONTRACT_ADDRESS
const DRIFE_LP_TOKEN_ADDRESS = CONFIG.DRIFE_LP_TOKEN_ADDRESS
const DRIFE_TOKEN = CONFIG.DRIFE_TOKEN

export async function getStakingDetails() {
	const web3 = new Web3(window.ethereum)

	const contractInstance = new web3.eth.Contract(
		STAKING_ABI,
		STAKING_CONTRACT_ADDRESS
	)
	const earlyWithdrawReward = await contractInstance.methods.earlyWithdrawReward
		.call()
		.call()
	const name = await contractInstance.methods.name.call().call()
	const rewardBalance = await contractInstance.methods.rewardBalance
		.call()
		.call()
	const rewardState = await contractInstance.methods.rewardState.call().call()
	const stakedBalance = await contractInstance.methods.stakedBalance
		.call()
		.call()
	const stakedTotal = await contractInstance.methods.stakedTotal.call().call()
	const stakingCap = await contractInstance.methods.stakingCap.call().call()
	const stakeState = await contractInstance.methods.stakeState.call().call()
	const tokenAddress = await contractInstance.methods.tokenAddress.call().call()
	const rewardTokenAddress = await contractInstance.methods.rewardTokenAddress
		.call()
		.call()
	const rewardsTotal = await contractInstance.methods.rewardsTotal.call().call()
	const stakingStarts = await contractInstance.methods.stakingStarts
		.call()
		.call()
	const stakingEnds = await contractInstance.methods.stakingEnds.call().call()
	const withdrawStarts = await contractInstance.methods.withdrawStarts
		.call()
		.call()
	const withdrawEnds = await contractInstance.methods.withdrawEnds.call().call()
	return {
		earlyWithdrawReward,
		name,
		rewardBalance,
		rewardState,
		stakedBalance,
		stakedTotal,
		stakingCap,
		stakeState,
		tokenAddress,
		rewardTokenAddress,
		rewardsTotal,
		stakingStarts,
		stakingEnds,
		withdrawEnds,
		withdrawStarts,
	}
}
export async function stake(amount, from) {
	const web3 = new Web3(window.ethereum)

	const contractInstance = new web3.eth.Contract(
		STAKING_ABI,
		STAKING_CONTRACT_ADDRESS
	)
	const receipt = await contractInstance.methods.stake(amount).send({ from })
	return receipt
}
export async function withdraw(amount, from) {
	const web3 = new Web3(window.ethereum)

	const contractInstance = new web3.eth.Contract(
		STAKING_ABI,
		STAKING_CONTRACT_ADDRESS
	)
	const receipt = await contractInstance.methods.withdraw(amount).send({ from })
	return receipt
}
export async function addReward(rewardsTotal, earlyWithdrawReward, from) {
	console.log(rewardsTotal, earlyWithdrawReward, from)
	const web3 = new Web3(window.ethereum)

	const contractInstance = new web3.eth.Contract(
		STAKING_ABI,
		STAKING_CONTRACT_ADDRESS
	)
	const receipt = await contractInstance.methods
		.addReward(rewardsTotal, earlyWithdrawReward)
		.send({ from })
	return receipt
}
export async function approve(amount, from) {
	const web3 = new Web3(window.ethereum)
	const contractInstance = new web3.eth.Contract(
		IERC20ABI,
		DRIFE_LP_TOKEN_ADDRESS
	)
	const receipt = await contractInstance.methods
		.approve(STAKING_CONTRACT_ADDRESS, amount)
		.send({ from })
	return receipt
}
export async function approveReward(amount, from) {
	const web3 = new Web3(window.ethereum)
	const contractInstance = new web3.eth.Contract(IERC20ABI, DRIFE_TOKEN)
	const receipt = await contractInstance.methods
		.approve(STAKING_CONTRACT_ADDRESS, amount)
		.send({ from })
	return receipt
}
export async function getTokenBalances(from) {
	const web3 = new Web3(window.ethereum)
	const LPTokenInstance = new web3.eth.Contract(
		IERC20ABI,
		DRIFE_LP_TOKEN_ADDRESS
	)
	const DRIFETokenInstance = new web3.eth.Contract(IERC20ABI, DRIFE_TOKEN)
	const LPT = await LPTokenInstance.methods.balanceOf(from)
	const DRF = await DRIFETokenInstance.methods.balanceOf(from)
	return {
		LPT,
		DRF,
	}
}
export async function stakeOf(from) {
	const web3 = new Web3(window.ethereum)
	const contractInstance = new web3.eth.Contract(
		STAKING_ABI,
		STAKING_CONTRACT_ADDRESS
	)
	const stake = await contractInstance.methods.stakeOf(from).call()
	return stake
}
