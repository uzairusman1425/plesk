/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		screens: {
			lg: "1250px",
			xl: "1500px"
		},
		extend: {
			colors: {
				primary: "#39B6E8",
				secondary: "#0284B8"
			}
		}
	},
	plugins: [require("tailwind-scrollbar")]
}
