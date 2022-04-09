/**
 * I wanted to show a simple example of structuring components / views in this way works.
 *
 *
 * Here I can build the PaymentModal component without any need for data sources
 * and easily play with different props extremely easy.
 *
 *
 * @author - Mike Rudge
 */

import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import PaymentModal from "./PaymentModal"
import { orders } from "../../mockData/orders"

export default {
	title: "App /  PaymentModal",
	component: PaymentModal,

	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof PaymentModal>

const Template: ComponentStory<typeof PaymentModal> = (args) => (
	<PaymentModal {...args} />
)

export const Loading = Template.bind({})

Loading.args = {
	isOpen: true,
	isLoading: true,
}
const order = orders[2]
export const FullExample = Template.bind({})
FullExample.args = {
	isOpen: true,
	order: order,
	isLoading: false,
}
