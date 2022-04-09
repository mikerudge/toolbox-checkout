import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"

import OrderCard from "../../views/OrderCard"
import PaymentModal from "../../views/PaymentModal"

const OrderPage = () => {
	const router = useRouter()
	const [showModal, setShowModal] = useState<boolean>(false)

	const orderNumber = router.query.id as string
	return (
		<>
			<Head>
				<title>Order Page - {orderNumber}</title>
			</Head>
			<div className=' mt-24'>
				<div className='prose'>
					<h1>Just add payment and you’re covered</h1>
					{orderNumber && (
						<OrderCard
							orderNumber={orderNumber}
							onSubmit={() => setShowModal(true)}
						/>
					)}
					<PaymentModal
						onClose={() => setShowModal(false)}
						isOpen={showModal}
						orderNumber={orderNumber}
					/>
				</div>
			</div>
		</>
	)
}

export default OrderPage
