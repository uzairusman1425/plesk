import { useState, useRef } from "react"

export default function DateSlider() {
	const containerRef = useRef(null)

	const [isDragging, setIsDragging] = useState(false)
	const [initialX, setInitialX] = useState(0)
	const [currentX, setCurrentX] = useState(0)

	const handleMouseDown = (event) => {
		const containerRect = containerRef?.current?.getBoundingClientRect()
		if (event?.clientX - containerRect?.left < containerRect?.width - 8) {
			setIsDragging(true)
			setInitialX(event?.clientX - containerRect?.left)
			setCurrentX(event?.clientX - containerRect?.left)
		}
	}

	const handleMouseMove = (event) => {
		const containerRect = containerRef?.current?.getBoundingClientRect()
		const deltaX = event?.clientX - initialX
		if (
			isDragging &&
			initialX - containerRect?.left + deltaX < containerRect?.width - 8
		) {
			setCurrentX(initialX - containerRect?.left + deltaX)
		}
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	const handleMouseLeave = () => {
		setIsDragging(false)
	}

	return (
		<div className="w-full flex flex-col gap-1">
			<div className="w-full flex flex-row items-center gap-5">
				<p className="text-xs text-gray-500 w-20">Select date:</p>
				<div
					className="w-full flex flex-row items-center cursor-pointer"
					ref={containerRef}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseLeave}
				>
					<div className="flex flex-col items-center gap-1">
						<div className="h-2 w-[1px] bg-gray-500" />
						<div className="h-2 w-[1px] bg-gray-500" />
					</div>
					<div className="h-[1px] w-full bg-gray-500 relative">
						<div
							className="size-2 rounded-full bg-primary absolute -top-1"
							style={{ left: currentX }}
						/>
					</div>
					<div className="flex flex-col items-center gap-1">
						<div className="h-2 w-[1px] bg-gray-500" />
						<div className="h-2 w-[1px] bg-gray-500" />
					</div>
				</div>
			</div>
			<div className="w-full flex flex-row items-center gap-5">
				<div className="w-20" />
				<div className="w-full flex flex-row items-center justify-between text-xs text-gray-500">
					<p>05/08/2024</p>
					<p>05/08/2024</p>
				</div>
			</div>
		</div>
	)
}
