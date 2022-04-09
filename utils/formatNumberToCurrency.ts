export const formatNumberToCurrency = (number: number | null | undefined) => {
	if (number === null || number === undefined) number = 0

	// format a number to GBP
	return number.toLocaleString("en-GB", { style: "currency", currency: "GBP" })
}
