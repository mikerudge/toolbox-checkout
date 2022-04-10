import React from "react"

type IconButtonProps = {
	icon: JSX.Element
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

const IconButton = (props: IconButtonProps) => {
	return (
		<button
			className='flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 p-1 text-sky-700 transition-colors hover:bg-sky-100 hover:text-sky-800'
			{...props}
		>
			{props.icon}
		</button>
	)
}

export default IconButton
