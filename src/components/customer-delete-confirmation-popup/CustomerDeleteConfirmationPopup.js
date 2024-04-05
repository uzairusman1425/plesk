import PropTypes from "prop-types"
import { XCircleIcon } from "@heroicons/react/24/outline"

export default function CustomerDeleteConfirmationPopup({
	customerToDelete,
	setCustomerToDelete
}) {
	console.log(customerToDelete)
	return (
		<div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-35 flex items-center justify-center">
			<div className="w-[500px] rounded-3xl bg-white shadow-xl flex flex-col gap-3 items-center p-3">
				<button className="place-self-end">
					<XCircleIcon className="size-7 text-gray-300" />
				</button>
				<p className="text-md font-light">
					Are You Sure to Delete This Employee
				</p>
				<div className="h-[1px] w-[95%] bg-gray-300 rounded-full" />
				<div className="grid grid-cols-2 gap-3 h-16 w-[95%] my-3">
					<button
						className="border rounded-xl text-xl"
						onClick={() => {
							setCustomerToDelete(null)
						}}
					>
						Cancel
					</button>
					<button
						className="bg-primary rounded-xl text-xl font-semibold text-white"
						onClick={() => {
							setCustomerToDelete(null)
						}}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}

CustomerDeleteConfirmationPopup.propTypes = {
	customerToDelete: PropTypes.number.isRequired,
	setCustomerToDelete: PropTypes.func.isRequired
}
