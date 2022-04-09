/**
 * I wanted to show a simple example of structuring components / views in this way works.
 *
 *
 * Here I can build the OrderCard component without any need for data sources
 * and easily play with different props extremely easy.
 *
 *
 * @author - Mike Rudge
 */

import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import OrderCard from "./OrderCard"
import { orders } from "../../mockData/orders"

export default {
	title: "App /  OrderCard",
	component: OrderCard,

	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof OrderCard>

const Template: ComponentStory<typeof OrderCard> = (args) => (
	<OrderCard {...args} />
)

export const Loading = Template.bind({})

Loading.args = {
	isLoading: true,
}
const order = orders[0]
export const FullExample = Template.bind({})
FullExample.args = {
	...order,
	isLoading: false,
	onSubmit: () => {
		console.log("onSubmit")
	},
}

export const WithDiscountCode = Template.bind({})
WithDiscountCode.args = {
	...order,
	discount: 200,
	isLoading: false,
	onSubmit: () => {
		console.log("onSubmit")
	},
}
