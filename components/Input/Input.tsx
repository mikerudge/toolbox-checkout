import React, { DetailedHTMLProps, InputHTMLAttributes } from "react"

type InputProps = {
	label: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<InputProps> = (props: InputProps) => {
	return (
		<div className='my-4 flex flex-col'>
			<label
				className='text-sm font-bold text-slate-600'
				htmlFor={`input-${props.label}`}
			>
				{props.label}
			</label>
			<input
				id={`input-${props.label}`}
				className='form-input my-2 rounded px-4 py-3'
				{...props}
			/>
		</div>
	)
}

export default Input
