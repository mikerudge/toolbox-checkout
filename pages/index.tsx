import Head from "next/head"
import { useRouter } from "next/router"
import { FormEvent } from "react"

import Button from "../components/Button"
import Card from "../components/Card"
import Input from "../components/Input"

import type { NextPage } from "next"
const Home: NextPage = () => {
	const router = useRouter()

	const handleRouteToOrder = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const target = e.target as typeof e.target & {
			orderNumber: { value: string }
		}
		const orderNumber = target.orderNumber.value

		if (orderNumber) {
			router.push(`/orders/${orderNumber}`)
		}
	}

	return (
		<div className='mt-24'>
			<Head>
				<title>Admiral Toolbox</title>
				<meta
					name='description'
					content='Built by Mike Rudge for Admiral developer role'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='prose'>
				<Card>
					<div className='mb-4'>
						<h1 className='mb-1'>Welcome to the toolbox</h1>

						<p className='m-0'>Enter your order number below to get started</p>
					</div>
					<form onSubmit={handleRouteToOrder}>
						<Input
							name='orderNumber'
							placeholder='1'
							label='Order Number (1-4)'
							type={"number"}
						/>
						<Button type='submit'>Take me to my order</Button>
					</form>
				</Card>
			</div>
		</div>
	)
}

export default Home
