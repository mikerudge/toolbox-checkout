import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProps = {} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button className='rounded bg-midnight py-2 px-4 text-blue-50' {...props}>
			{props.children}
		</button>
	)
}
export default Button
