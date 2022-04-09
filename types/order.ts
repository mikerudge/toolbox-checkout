export type Order = {
	id: string
	title?: string
	policyType?: string
	coverLevel?: number
	typeOfCover?: string
	excess?: number
	discount?: number
	total?: number
	price?: number
	paymentDate?: string | Date
	paidAt?: Date
	createdAt?: Date
	updatedAt?: Date
}
