import React, { DetailedHTMLProps, HTMLAttributes } from "react"

type CardProps = {} & DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>
const Card = (props: CardProps) => {
	return (
		<div className='rounded-xl bg-white p-8 shadow-xl' {...props}>
			{props.children}
		</div>
	)
}

export default Card
