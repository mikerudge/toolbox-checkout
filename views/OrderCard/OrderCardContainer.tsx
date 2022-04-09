import React from "react"
import { useOrder } from "../../hooks/useOrder"
import { Order } from "../../types/order"
import OrderCard from "./OrderCard"

type OrderCardContainerProps = {
	orderNumber: string
	onSubmit?: () => void
}

const OrderCardContainer: React.FC<OrderCardContainerProps> = (props) => {
	const { order, isLoading, hasError, handleUpdate } = useOrder(
		props.orderNumber
	)
	const handleApplyOfferCode = async (id: string) => {
		try {
			const res = await fetch(`/api/discount/${id}`)
			const data = await res.json()

			if (data.discount && order) {
				const totalDiscount =
					data.type === "percentage"
						? (order?.total ?? 0) * data.discount
						: data.discount

				const newOrder: Order = { ...order, discount: totalDiscount }

				await handleUpdate(newOrder)
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<OrderCard
			onSubmit={props.onSubmit}
			onOfferCodeApply={handleApplyOfferCode}
			title={order?.title}
			policyType={order?.policyType}
			typeOfCover={order?.typeOfCover}
			excess={order?.excess}
			total={order?.total}
			paymentDate={order?.paymentDate}
			coverLevel={order?.coverLevel}
			discount={order?.discount}
			isLoading={isLoading}
		/>
	)
}

export default OrderCardContainer
