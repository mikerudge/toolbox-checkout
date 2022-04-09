import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useRef, useState } from "react"
import React, { useEffect } from "react"
import Divider from "../Divider"

type ModalProps = {
	title: string
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

const Modal: React.FC<ModalProps> = (props) => {
	const [canRender, setCanRender] = useState<boolean>(false)
	useEffect(() => {
		setCanRender(true)
	}, [])

	if (!canRender) return null

	return (
		<Dialog
			onClose={props.onClose}
			open={props.isOpen}
			className='fixed inset-0 z-10 overflow-y-auto'
		>
			<Dialog.Overlay className='fixed inset-0 bg-slate-900 opacity-40' />
			<div className='flex items-center justify-center'>
				{/* This element is to trick the browser into centering the modal contents. */}
				<span className='inline-block h-screen align-middle' aria-hidden='true'>
					&#8203;
				</span>

				<div className='my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all'>
					<Dialog.Title
						as='h3'
						className='mb-4 text-lg font-medium leading-6 text-gray-900'
					>
						{props.title}
					</Dialog.Title>
					<Divider />
					{props.children}
				</div>
			</div>
		</Dialog>
	)
}

export default Modal
