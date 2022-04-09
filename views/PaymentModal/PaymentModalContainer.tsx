import React from "react"

import { useOrder } from "../../hooks/useOrder"
import PaymentModal from "./PaymentModal"

interface PaymentModalContainerProps {
	orderNumber: string
	isOpen: boolean
	onClose: () => void
}

const PaymentModalContainer: React.FC<PaymentModalContainerProps> = (props) => {
	const { order, isLoading, hasError } = useOrder(props.orderNumber)

	return (
		<PaymentModal
			isLoading={isLoading}
			order={order}
			isOpen={props.isOpen}
			onClose={props.onClose}
		/>
	)
}

export default PaymentModalContainer
