import dayjs from "dayjs"
import React from "react"

import { formatNumberToCurrency } from "../../utils/formatNumberToCurrency"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Divider from "../../components/Divider/Divider"
import OrderItemRow from "../../components/OrderItemRow"

interface OrderCardProps {
	title?: string
	policyType?: string
	coverLevel?: number
	typeOfCover?: string
	excess?: number
	discount?: number
	total?: number
	paymentDate?: string | Date
	onOfferCodeApply?: (code: string) => void
	onSubmit?: () => void
	isLoading?: boolean
}

const OrderCard = (props: OrderCardProps) => {
	if (props.isLoading) {
		// TODO: show loading indicator component
		return (
			<div className='prose flex min-h-screen items-center justify-center'>
				<h3>Looking up your order...</h3>
			</div>
		)
	}

	const paymentDate = dayjs(props.paymentDate)
	const dayOfPayment = dayjs(paymentDate).format("D")

	return (
		<Card>
			<div className='prose'>
				<h2 className='mb-2'>{props.title}</h2>
				<p>We’ll take your payments on the {dayOfPayment} of the month</p>
				<Divider />
				<section>
					<div>
						<p className='text-right text-xs'>
							Your premium includes Insurance premium tax (IPT) at 12%
						</p>
					</div>
					<OrderItemRow title='Policy Type' value={props.policyType ?? ""} />
					<OrderItemRow
						title='Cover Level'
						value={formatNumberToCurrency(props.coverLevel)}
					/>
					<OrderItemRow title='Type of Cover' value={props.typeOfCover ?? ""} />
				</section>
				<Divider />
				<section className='my-8'>
					<div className='mt-4 flex items-center justify-between'>
						<h3 className='m-0'>Excess</h3>
						<h3 className='m-0'>{formatNumberToCurrency(props.excess)}</h3>
					</div>
					<p className='m-0 my-4 text-sm text-slate-500'>
						(Excess figure will be deducted from any claim settlement payments)
					</p>
				</section>
				<Divider />
				{!props.discount ? (
					<section className='my-8'>
						<div className='mt-4 flex items-center justify-between'>
							<h3 className='m-0'>Promo Code</h3>
							<div className='grid'>
								<input
									type={"text"}
									onBlur={(e) => {
										e.preventDefault()
										if (e.target.value) {
											props.onOfferCodeApply?.(e.target.value)
										}
									}}
									placeholder='10OFF'
									id='promo-input'
									className='rounded border-2 border-slate-500 px-2 py-1'
								/>
							</div>
						</div>
					</section>
				) : null}

				{props.discount ? (
					<section className='my-8'>
						<div className='mt-4 flex items-center justify-between '>
							<h3 className='m-0'>Discount Applied</h3>

							<h3 className='m-0 text-green-500'>
								{formatNumberToCurrency(-props.discount)}
							</h3>
						</div>
					</section>
				) : null}
				<Divider />
				<section className='my-8'>
					<div className='mt-4 flex items-center justify-between'>
						<h3 className='m-0'>Total Annual Premium payment due</h3>
						<h3 className='m-0'>{formatNumberToCurrency(props.total)}</h3>
					</div>
				</section>
				<Divider />
				<section className='my-8'>
					<div className='mt-4 flex items-center justify-between'>
						<h3 className='m-0'>Payment schedule</h3>
					</div>
					<div className='flex items-center justify-between'>
						<OrderItemRow
							title='Payment Date'
							value={paymentDate.format("DD/MM/YYYY")}
						/>
						<OrderItemRow
							title='Amount Due'
							value={formatNumberToCurrency(props.total)}
						/>
					</div>
				</section>
			</div>
			<div className='text-right'>
				<Button onClick={props.onSubmit}>Place order</Button>
			</div>
		</Card>
	)
}

export default OrderCard
