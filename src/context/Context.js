import * as React from "react"

import { useCallback, useContext, useMemo, useState } from "react"

const UseSpinnerContext = React.createContext(null)

function useSpinner() {
	const spinnerContext = useContext(UseSpinnerContext)

	if (spinnerContext === null) {
		throw new Error(
			"useSpinner() can only be used inside of <UseSpinnerProvider />, " +
				"please declare it at a higher level."
		)
	}

	const { spinner } = spinnerContext

	return useMemo(() => {
		return { ...spinner }
	}, [spinner])
}

function UseSpinnerProvider({ children }) {
	const spinnerContext = useContext(UseSpinnerContext)

	if (spinnerContext !== null) {
		throw new Error("<UseSpinnerContext /> has already been declared.")
	}
	const [isLoading, setIsLoading] = useState(false)
	const setLoadingState = loading => {
		setIsLoading(loading)
	}
	const spinner = useMemo(
		() => ({
			isLoading,
			setLoadingState,
		}),
		[isLoading, setLoadingState]
	)

	return (
		<UseSpinnerContext.Provider
			value={{
				spinner,
			}}>
			{children}
		</UseSpinnerContext.Provider>
	)
}

function UseSpinnerProviderWrapper(props) {
	return <UseSpinnerProvider {...props} />
}

export const withSpinner = Component => {
	return props => {
		const spinner = useSpinner()

		return <Component spinner={spinner} {...props} />
	}
}

export { UseSpinnerProviderWrapper as UseSpinnerProvider, useSpinner }
