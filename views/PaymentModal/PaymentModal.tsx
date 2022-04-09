import Button from "../../components/Button"
import Input from "../../components/Input"
import Modal from "../../components/Modal"

import type { Order } from "../../types/order"
import OrderItemRow from "../../components/OrderItemRow"
import { formatNumberToCurrency } from "../../utils/formatNumberToCurrency"

type PaymentModalProps = {
	isOpen: boolean
	onClose: () => void
	order?: Order | null | undefined
	isLoading?: boolean
}
const PaymentModal = (props: PaymentModalProps) => {
	if (props.isLoading) {
		return <div />
	}

	if (!props.order) return null

	console.log("props.order", props.order)
	console.log("props.isOpen", props.isOpen)

	return (
		<Modal
			onClose={props.onClose}
			isOpen={props.isOpen}
			title='Payment Details'
		>
			<div className='prose mt-4 flex justify-between'>
				<h3 className='m-0'>Total</h3>
				<h3 className='m-0'>{formatNumberToCurrency(props.order.total)}</h3>
			</div>
			<form className='mt-8'>
				<Input label='Card Number' type='number' />
				<Input label='CVC' type='password' />
				<Input label='Expiry Date' type='date' />
				<div className='text-right'>
					<Button
						onClick={(e) => {
							e.preventDefault()
							props.onClose()
						}}
						type='submit'
					>
						Pay Now
					</Button>
				</div>
			</form>
		</Modal>
	)
}

export default PaymentModal
