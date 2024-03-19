import Image from "next/image"

export default function SignInLayout({ children }) {
	return (
		<div className="h-screen w-screen flex flex-col items-center">
			<div className="flex-1 flex flex-col items-center justify-between py-20">
				<Image
					src={"/images/logo.png"}
					alt="plesk"
					height={200}
					width={200}
				/>
				{children}
				<div />
			</div>
			<div className="h-10 w-full bg-primary" />
		</div>
	)
}
