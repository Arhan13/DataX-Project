import React, { useState, useEffect, useRef } from "react"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"
import { v4 as uuidv4 } from "uuid"
import chore from "../assets/chore.svg"
import finance from "../assets/finance.svg"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	},
	button: {
		margin: theme.spacing(1),
	},
	textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
}))

// let mfvals = {
// 	id: uuidv4(),
// 	itemName: "Item4",
// 	quantity: 108,
// 	minQuantity: 105,
// 	shown: false,
// };

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 700,
//   bgcolor: 'background.paper',
  bgcolor: 'white',
  border: '4px solid white',
  backgroundColor:"#203A43",
//   backgroundImage: `url(${chore})`,
//   height: '520px',
  borderRadius: "40px",
  boxDecoration: "none",
  outline: "none",
  color: "white",
  textAlign: "center",
//   textAlign: 'center',
  p: 2,
  px: 4,
  pb: 3,
};

// export default function ModalUnstyledDemo() {
	

function Staking() {
	const classes = useStyles()
	const [inputFields, setInputFields] = useState([
		{
			i:0,
			id: uuidv4(),
			itemName: "Item1",
			quantity: 2750,
			minQuantity: 838.8,
			dtb: 9,
			spd: 93.2,
			p: 4,
			shown: false,
		},
		{
			i:1,
			id: uuidv4(),
			itemName: "Item2",
			quantity: 22500,
			minQuantity: 3943.8,
			dtb: 6,
			spd: 657.3,
			p: 1.6,
			shown: false,
		},
		{
			i:2,
			id: uuidv4(),
			itemName: "Item3",
			quantity: 5200,
			minQuantity: 2987.2,
			dtb: 16,
			spd: 186.7,
			p: 4.2,
			shown: false,
		},
		{
			i:3,
			id: uuidv4(),
			itemName: "Item4",
			quantity: 1400,
			minQuantity: 1003,
			spd: 45.6,
			dtb: 22,
			p: 31,
			shown: false,
		},
	])

	const [shownArray1, setShownArray1] = useState({ less: false, more: false })
	const [shownArray2, setShownArray2] = useState({ less: false, more: false })
	const [shownArray3, setShownArray3] = useState({ less: false, more: false })
	const [shownArray4, setShownArray4] = useState({ less: false, more: false })

	const handleSubmit = e => {
		e.preventDefault()
		console.log("InputFields", inputFields)
	}

	const i = useRef(1);

	const handleChangeInput = (id, event) => {
		const newInputFields = inputFields.map(i => {
			if (id === i.id) {
				i[event.target.name] = event.target.value
			}
			return i
		})

		setInputFields(newInputFields)
	}

	const handleAddFields = () => {
		setInputFields([
			...inputFields,
			{ id: uuidv4(), itemName: "", quantity: "", minQuantity: "" },
		])
	}

	const handleRemoveFields = id => {
		const values = [...inputFields]
		values.splice(
			values.findIndex(value => value.id === id),
			1
		)
		setInputFields(values)
	}

	useEffect(() => {
		if (inputFields[0]?.quantity < inputFields[0].minQuantity && !shownArray1?.more) {
			toast.error("Stocks of item 1 is about to finish, restock immediately")
			setShownArray1({ ...shownArray1, more: true })
		}
		if (inputFields[1]?.quantity < inputFields[1].minQuantity && !shownArray2?.more) {
			toast.error("Stocks of item 2 is about to finish, restock immediately")
			setShownArray2({ ...shownArray2, more: true })
		}
		if (inputFields[2]?.quantity < inputFields[2].minQuantity && !shownArray3?.more) {
			toast.error("Stocks of item 3 is about to finish, restock immediately")
			setShownArray3({ ...shownArray3, more: true })
		}
		if (inputFields[3]?.quantity < inputFields[3].minQuantity && !shownArray4?.more) {
			toast.error("Stocks of item 4 is about to finish, restock immediately")
			setShownArray4({ ...shownArray4, more: true })
		}
	}, [
		inputFields[0]?.quantity,
		inputFields[1]?.quantity,
		inputFields[2]?.quantity,
		inputFields[3]?.quantity,
	])

	const [open, setOpen] = React.useState(false);
	const handleOpen = (ni) => {console.log(ni);setTimeout(setOpen(true),10000);;}
	const handleClose = () => setOpen(false);

	const btnSubmit = async (ni)=>{
		// mfvals = await inputField;
		// console.log(i);
		i.current = ni
		setTimeout(handleOpen(ni),5000);
	}

	return (
		<div
			style={{
				marginTop: "10vh",
				display: "flex",
				flexDirection: "column",
				// alignItems: "center",
				// justifyContent: "center",
				color: "white",
				width: "100%",
			}}>
			<h1 style={{textAlign:"center", fontSize: "3.5rem", fontWeight: "bold", color:"white" }}>Manage Inventory</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "5%",
					gap: "25vh",
					// width: "100%",
				}}>
				<img src={finance} 
				style={{transform:"scale(1.25)"}} 
				/>
				{/* <div> */}
				<form
					className={classes.root}
					onSubmit={handleSubmit}
					style={{ paddingLeft:"-50%" , transform:"scale(1.5)"}}
					>
					{inputFields.map(inputField => (
						<div key={inputField.id}>
							<TextField
								// className={classes.textField}
								style={{display:"inline-block",borderRadius:"20px",backgroundColor:"white"}}
								InputProps={{ disableUnderline: true }}
								name="itemName"
								label="Item Name"
								variant="filled"
								value={inputField.itemName}
								onChange={event => handleChangeInput(inputField.id, event)}
							/>
							{/* <IconButton
								style={{display:"inline-block",color:"white"}}
								disabled={inputFields.length === 1}
								onClick={() => handleRemoveFields(inputField.id)}>
								<RemoveIcon />
							</IconButton> */}
							<TextField
								style={{display:"inline-block",borderRadius:"20px",backgroundColor:"white"}}
								InputProps={{ disableUnderline: true }}
								type="number"
								name="quantity"
								label="Quantity"
								variant="filled"
								value={inputField.quantity}
								onChange={event => handleChangeInput(inputField.id, event)}
							/>
							<Button
								className={classes.button}
								variant="contained"
								color="primary"
								type="submit"
								style={{
									backgroundColor:"transparent",
									color:"#fefefe",
									paddingLeft:"10px",
									paddingRight:"10px",
									marginTop: "15px",
									paddingTop:"5px",
									paddingBottom:"5px",
									fontSize: "15px",
									border: "solid 2px white",
									borderRadius:"0.75rem"
									}}
								onClick={event => btnSubmit(inputField.i)}>
								Predict
							</Button>
							{/* <IconButton 
								style={{display:"inline-block",color:"white"}}
								onClick={handleAddFields}>
								<AddIcon />
							</IconButton> */}
						</div>
					))}
					{/* <Button
						className={classes.button}
						variant="contained"
						color="primary"
						type="submit"
						style={{
							backgroundColor:"transparent",
							color:"#fefefe",
							paddingLeft:"10px",
							paddingRight:"10px",
							paddingTop:"5px",
							paddingBottom:"5px",
							fontSize: "15px",
							border: "solid 2px white"
							}}
						onClick={handleSubmit}>
						Submit
					</Button> */}
				</form>
				{/* </div> */}
			</div>
			<StyledModal
				aria-labelledby="unstyled-modal-title"
				aria-describedby="unstyled-modal-description"
				open={open}
				onClose={handleClose}
				BackdropComponent={Backdrop}
				// style={{backgroundColor:"white"}}
				>
				<Box sx={style}>
					<h1 style={{textAlign:"center", padding:"15px"}} id="unstyled-modal-title">Data According To Our Prediction</h1>
					{/* <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p> */}
					<div style={{fontSize:"25px", marginBottom:"15px"}}>How many items you are left with:<span style={{fontWeight:"bold", marginLeft:"3px"}}>{inputFields[i.current].quantity} items</span></div>
					<div style={{fontSize:"25px", marginBottom:"15px"}}>How many you should purchase:<span style={{fontWeight:"bold", marginLeft:"3px"}}>{(Math.abs(inputFields[i.current].dtb*inputFields[i.current].spd-inputFields[i.current].quantity)*2.5).toFixed(0)} items</span></div>
					<div style={{fontSize:"25px", marginBottom:"15px"}}>By when you will exhaust your current stock:<span style={{fontWeight:"bold", marginLeft:"3px"}}>{(inputFields[i.current].quantity/inputFields[i.current].spd).toFixed(1)} days</span></div>
					<div style={{fontSize:"25px", marginBottom:"15px"}}>Days it will work after restocking:<span style={{fontWeight:"bold", marginLeft:"3px"}}>{Math.round((Math.abs(inputFields[i.current].dtb*inputFields[i.current].spd)*2.5 + inputFields[i.current].quantity)/inputFields[i.current].spd).toFixed(1)} days</span></div>
					<div style={{fontSize:"25px", marginBottom:"15px"}}>Net profit you can gain:<span style={{fontWeight:"bold", marginLeft:"3px"}}>Rs {Math.round((Math.abs(inputFields[i.current].dtb*inputFields[i.current].spd-inputFields[i.current].quantity)*2.5 + inputFields[i.current].quantity)*inputFields[i.current].p).toFixed(2)}</span></div>
					<img src={chore} />
				</Box>
			</StyledModal>
		</div>
	)
}

export default Staking