import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"

import OrderCard from "../../views/OrderCard"
import PaymentModal from "../../views/PaymentModal"

/**
 * I realise this might be a little contrived, as I could fetch the data with getStaticProps.
 * However, I wanted to show a common example of putting data close to the components.
 *
 * In a real world example of this, I would probably fetch the data for the page and pass it to the component.
 */
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
					<h1 className='mb-0 text-xl text-midnight'>
						Just add payment and you’re covered
					</h1>
					<p className='mt-1 text-slate-500'>
						Look over everything below carefully, make any adjustments needed or
						continue to the payment page to finalise your order.{" "}
					</p>
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
