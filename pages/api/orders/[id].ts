import type { NextApiRequest, NextApiResponse } from "next"
import { orders } from "../../../mockData/orders"
import { Order } from "../../../types/order"

type Error = {
	message: string
}

const handleGetOrder = (id?: string): Order | Order[] | Error => {
	if (id) {
		const order = orders.find((o) => o.id === id)

		if (order) {
			const orderWithTotal = {
				...order,
				total: (order?.price ?? 0) - (order.discount ?? 0),
			}

			return orderWithTotal
		} else {
			return { message: "Order not found" }
		}
	} else {
		return orders
	}
}

const handleUpdateOfOrder = (order: Order): Order | Error => {
	const updatedOrder = orders.find((o) => o.id === order.id)
	console.log("updating order", updatedOrder)
	if (updatedOrder) {
		// remove the order
		orders.splice(orders.indexOf(updatedOrder), 1)

		// add the updated order
		orders.push(order)
		return order
	} else {
		return { message: "Order not found" }
	}
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Order | Order[] | Error>
) {
	const { method } = req
	const id = req.query.id as string
	switch (method) {
		case "GET":
			const orders = handleGetOrder(id)
			res.status(200).json(orders)
			break
		case "PUT":
			handleUpdateOfOrder(req.body)

			res.status(200).json({ message: "PUT" })
			// handlePost()
			break
		default:
			res.setHeader("Allow", ["GET", "POST"])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}
