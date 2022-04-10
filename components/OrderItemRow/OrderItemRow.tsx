import { PencilIcon } from "@heroicons/react/solid"
import IconButton from "../IconButton"

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
				<IconButton title='edit' icon={<PencilIcon width={18} height={18} />} />
			) : null}
		</div>
	)
}

export default OrderItemRow
