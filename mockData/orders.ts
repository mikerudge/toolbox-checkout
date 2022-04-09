import { Order } from "../types/order"
import dayjs from "dayjs"
export const orders: Order[] = [
	{
		id: "1",
		title: "Policy 1",
		policyType: "Life",
		coverLevel: 500,
		typeOfCover: "Accidental Death",
		excess: 100,
		discount: 0,
		price: 4000,
		paymentDate: dayjs().add(1, "day").format("YYYY-MM-DD"),
	},
	{
		id: "2",
		title: "Policy 2",
		policyType: "Life",
		coverLevel: 500,
		typeOfCover: "Accidental Death",
		excess: 100,

		price: 2000,
		paymentDate: dayjs().add(2, "day").format("YYYY-MM-DD"),
	},
	{
		id: "3",
		title: "Policy 3",
		policyType: "Life",
		coverLevel: 500,
		typeOfCover: "Accidental Death",
		excess: 100,

		price: 1000,

		paymentDate: dayjs().add(3, "day").format("YYYY-MM-DD"),
	},
	{
		id: "4",
		title: "Policy 4",
		policyType: "Life",
		coverLevel: 500,
		typeOfCover: "Accidental Death",
		excess: 100,

		price: 500.23,

		paymentDate: dayjs().add(4, "day").format("YYYY-MM-DD"),
	},
]
