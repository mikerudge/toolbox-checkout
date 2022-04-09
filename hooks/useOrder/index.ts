import useSWR from "swr"

import type { Order } from "../../types/order"

export const useOrder = (id: string) => {
	const { data, error, mutate } = useSWR(`/api/orders/${id}`)

	const handleUpdate = async (order: Order) => {
		const res = await fetch(`/api/orders/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(order),
		})
		if (res.ok) {
			const updatedOrder = await res.json()
			mutate(updatedOrder)
		}
	}

	return {
		order: data as Order | null | undefined,
		isLoading: !error && !data,
		hasError: error,
		handleUpdate,
	}
}
