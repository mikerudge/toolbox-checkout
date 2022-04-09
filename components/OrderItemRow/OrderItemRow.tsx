import { PencilIcon } from "@heroicons/react/solid"

type OrderItemRowProps = {
	title: string
	value: string
	canEdit?: boolean
}

const OrderItemRow = (props: OrderItemRowProps) => {
	return (
		<div className='my-4 flex w-full items-center justify-between  transition-colors'>
			<div>
				<label className='mb-1 text-sm'>{props.title}</label>
				<div className='flex flex-wrap'>
					<div>
						<h4 className='mt-2'>{props.value}</h4>
					</div>
				</div>
			</div>
			{props.canEdit ? (
				<button
					title='edit'
					className='flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 p-1 text-sky-500 transition-colors hover:bg-sky-100 hover:text-sky-600'
				>
					<PencilIcon width={18} height={18} />
				</button>
			) : null}
		</div>
	)
}

export default OrderItemRow
