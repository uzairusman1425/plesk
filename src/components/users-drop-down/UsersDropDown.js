import { ChevronDownIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { UserGroupIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"

export default function UsersDropDown({
	selectedUser,
	setSelectedUser,
	showUserDropdown,
	setShowUserDropdown
}) {
	return (
		<div className="flex flex-row items-center gap-2 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300 relative z-10">
			<UserGroupIcon className="size-4 text-black" />
			<p className="text-xs">{selectedUser}</p>
			<button
				onClick={() => {
					setShowUserDropdown(!showUserDropdown)
				}}
				className={`transform-gpu ease-in-out duration-300 ${
					showUserDropdown && "rotate-180"
				}`}
			>
				<ChevronDownIcon className="size-3 text-black" />
			</button>
			{showUserDropdown && (
				<div className="h-52 w-96 rounded-lg border shadow-xl absolute left-0 -bottom-[215px] bg-white z-20 p-3 flex flex-col gap-2">
					<div className="flex flex-row items-center gap-3">
						<p className="text-xs">Filter By:</p>
						<button className="p-1 bg-primary rounded flex flex-row items-center gap-1">
							<UserGroupIcon className="size-3 text-white" />
							<p className="text-xs text-white">{selectedUser}</p>
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

UsersDropDown.propTypes = {
	selectedUser: PropTypes.string.isRequired,
	setSelectedUser: PropTypes.func.isRequired,
	showUserDropdown: PropTypes.bool.isRequired,
	setShowUserDropdown: PropTypes.func.isRequired
}
