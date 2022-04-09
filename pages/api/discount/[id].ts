import type { NextApiRequest, NextApiResponse } from "next"
import { discountCodes } from "../../../mockData/discountCodes"

type Error = {
	message: string
}

type Success = {
	discount: number
	type: "percentage" | "fixed"
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Success | Error>
) {
	const discountCode = discountCodes.find((o) => o.code === req.query.id)

	if (discountCode) {
		console.log("discountCode", discountCode)
		discountCodes.splice(discountCodes.indexOf(discountCode), 1)
		console.log("discountCodes", discountCodes)
		if (discountCode.numberOfUses > 1) {
			// re add the discount code to the array with one less usage

			const discountCodeUpdated = {
				...discountCode,
				numberOfUses: discountCode.numberOfUses - 1,
			}

			discountCodes.push(discountCodeUpdated)
		}
		console.log("discountCodes 22", discountCodes)
		return res
			.status(200)
			.json({ discount: discountCode.discount, type: discountCode.type })
	} else {
		return res.status(404).json({ message: "Discount code not found" })
	}
}
