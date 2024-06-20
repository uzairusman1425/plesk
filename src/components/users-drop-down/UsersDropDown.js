import { ChevronDownIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import {
	UserGroupIcon,
	MagnifyingGlassIcon,
	XMarkIcon
} from "@heroicons/react/24/solid"
import PropTypes from "prop-types"

export default function UsersDropDown({
	allUsers,
	selectedUser,
	setSelectedUser,
	showUserDropdown,
	setShowUserDropdown
}) {
	return (
		<div className="flex flex-row items-center gap-2 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300 relative z-10">
			<UserGroupIcon className="size-4 text-black" />
			<p className="text-xs">
				{selectedUser
					? `${selectedUser?.firstName} ${selectedUser?.lastName}`
					: "All Users"}
			</p>
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
				<div className="h-60 w-[500px] rounded-lg border shadow-xl absolute left-0 -bottom-[245px] bg-white z-20 px-5 py-3 flex flex-col gap-3">
					<div className="w-full flex flex-row items-center justify-between">
						<div className="flex flex-row items-center gap-3">
							<p className="text-xs">Filter By:</p>
							<button className="p-1 bg-primary rounded flex flex-row items-center gap-1">
								<UserGroupIcon className="size-3 text-white" />
								<p className="text-xs text-white">
									{selectedUser
										? `${selectedUser?.firstName} ${selectedUser?.lastName}`
										: "All Users"}
								</p>
							</button>
						</div>
						<button
							onClick={() => {
								setShowUserDropdown(false)
							}}
						>
							<XMarkIcon className="size-5 text-black" />
						</button>
					</div>
					<div className="h-7 w-full rounded-md border px-2 flex flex-row items-center gap-3">
						<MagnifyingGlassIcon className="size-3 text-gray-500" />
						<input
							className="w-full text-xs outline-none"
							type="text"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-2 overflow-y-auto scrollbar-none">
						<button
							className="min-h-7 w-full rounded-md border px-2 flex flex-row items-center gap-3"
							onClick={() => {
								setSelectedUser(null)
							}}
						>
							<UserGroupIcon className="size-3 text-black" />
							<p className="text-xs">All Users</p>
						</button>
						{allUsers?.map((item, key) => {
							return (
								<button
									className="min-h-7 w-full rounded-md border px-2 flex flex-row items-center gap-3"
									onClick={() => {
										setSelectedUser(item)
									}}
									key={key}
								>
									<UserGroupIcon className="size-3 text-black" />
									<p className="text-xs">{`${item?.firstName} ${item?.lastName}`}</p>
								</button>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}

UsersDropDown.propTypes = {
	allUsers: PropTypes.array.isRequired,
	selectedUser: PropTypes.string,
	setSelectedUser: PropTypes.func.isRequired,
	showUserDropdown: PropTypes.bool.isRequired,
	setShowUserDropdown: PropTypes.func.isRequired
}
