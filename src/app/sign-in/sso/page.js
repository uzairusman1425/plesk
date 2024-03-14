"use client"

import { useRouter } from "next/navigation"

export default function SSO() {
	const router = useRouter()

	return (
		<div className="flex flex-col items-center gap-7">
			<p className="text-xl font-semibold text-primary">
				Sign in to your Plesk Account
			</p>
			<input
				type="email"
				placeholder="Email"
				className="h-10 w-full px-2 border rounded-md"
			/>
			<button className="h-10 w-full flex items-center justify-center uppercase text-white text-md font-medium bg-primary rounded-md">
				sign in
			</button>
			<button 
                className="h-10 w-full flex items-center justify-center uppercase text-white text-md font-medium bg-red-500 rounded-md"
                onClick={() => {
                    router.back()
                }}
            >
				cancel
			</button>
		</div>
	)
}
