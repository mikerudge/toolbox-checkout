import { DiscountCode } from "../types/discountCode"

export const discountCodes: DiscountCode[] = [
	{
		id: "1",
		code: "123",
		partnerId: "1",
		discount: 150,
		numberOfUses: 1,
		type: "fixed",
	},
	{
		id: "2",
		code: "234",
		partnerId: "1",
		numberOfUses: 2,
		discount: 0.1,
		type: "percentage",
	},
	{
		id: "3",
		code: "345",
		partnerId: "2",
		numberOfUses: 3,
		discount: 30,
		type: "fixed",
	},
	{
		id: "4",
		code: "456",
		partnerId: "2",
		numberOfUses: 4,
		discount: 0.2,
		type: "percentage",
	},
]
