export type DiscountCode = {
	id: string
	code: string
	partnerId: string
	discount: number
	numberOfUses: number
	type: "percentage" | "fixed"
}
