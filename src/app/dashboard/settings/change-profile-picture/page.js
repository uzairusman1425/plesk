"use client"

import { useContext, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"
import { AppContext } from "@/context/context"

export default function ChangeProfilePicture() {
	const router = useRouter()

	const { state } = useContext(AppContext)

	const [imageURL, setImageURL] = useState(null)
	const [image, setImage] = useState(null)

	const handleImageDrop = (e) => {
		e.preventDefault()
		const file = e.dataTransfer.files[0]
		if (file) {
			setImageURL(URL.createObjectURL(file))
			setImage(file)
		}
	}

	const handleImageDragOver = (e) => {
		e.preventDefault()
	}

	return (
		<div className="flex-1 flex flex-col items-center gap-10 p-10">
			<div className="w-full flex flex-row items-center justify-between">
				<button
					className="size-7 rounded-lg border-2 border-black flex items-center justify-center"
					onClick={() => {
						router?.back()
					}}
				>
					<ChevronLeftIcon className="size-5 text-black" />
				</button>
				<p className="text-xl font-semibold">Edit Profile Picture</p>
				<div className="w-7" />
			</div>
			<div className="size-32 rounded-full border border-dashed border-black flex items-center justify-center">
				<Image
					src={
						state?.user?.image?.length > 0
							? state?.user?.image
							: "/images/profile.png"
					}
					alt="profile"
					height={120}
					width={120}
					className="rounded-full"
				/>
			</div>
			<p className="font-semibold">Upload Your New Picture</p>
			<div
				className="h-44 w-96 border border-gray-300 p-5 rounded-2xl shadow-xl flex justify-center items-center"
				onDrop={handleImageDrop}
				onDragOver={handleImageDragOver}
			>
				{imageURL ? (
					<Image
						src={imageURL}
						alt="uploaded"
						height={75}
						width={75}
					/>
				) : (
					<CloudArrowUpIcon className="size-20 text-sky-500" />
				)}
			</div>
			<button className=" h-10 w-24 rounded-lg flex items-center justify-center text-white bg-primary">
				Done
			</button>
		</div>
	)
}
