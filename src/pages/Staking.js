import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"
import { v4 as uuidv4 } from "uuid"

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
}))

function Staking() {
	const classes = useStyles()
	const [inputFields, setInputFields] = useState([
		{ id: uuidv4(), itemName: "", quantity: "", minQuantity: "" },
	])

	const handleSubmit = e => {
		e.preventDefault()
		console.log("InputFields", inputFields)
	}

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

	return (
		<Container
			style={{
				marginTop: "20vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "white",
			}}>
			<h1>Manage Inventory</h1>
			<form className={classes.root} onSubmit={handleSubmit}>
				{inputFields.map(inputField => (
					<div key={inputField.id}>
						<TextField
							name="itemName"
							label="Item Name"
							variant="filled"
							value={inputField.itemName}
							onChange={event => handleChangeInput(inputField.id, event)}
						/>
						<TextField
							type="number"
							name="quantity"
							label="Quantity"
							variant="filled"
							value={inputField.quantity}
							onChange={event => handleChangeInput(inputField.id, event)}
						/>
						<IconButton
							disabled={inputFields.length === 1}
							onClick={() => handleRemoveFields(inputField.id)}>
							<RemoveIcon />
						</IconButton>
						<IconButton onClick={handleAddFields}>
							<AddIcon />
						</IconButton>
					</div>
				))}
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					type="submit"
					onClick={handleSubmit}>
					Submit
				</Button>
			</form>
		</Container>
	)
}

export default Staking
