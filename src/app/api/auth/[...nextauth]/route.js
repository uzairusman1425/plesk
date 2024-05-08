import axios from "axios"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/user-model"
import connect from "@/database-config/dbConfig"

const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		CredentialsProvider({
			name: "credentials",
			credentials: {},
			authorize: async (credentials) => {
				const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

				const { email, password } = credentials

				try {
					const user = await axios
						.post(`${API_BASE_URL}/api/users/login`, {
							email,
							password
						})
						?.then((res) => {
							console.log(res)
							return res?.data?.data?.user
						})
						?.catch((err) => {
							console.log(err)
							return false
						})

					if (!user) {
						return false
					}

					return user
				} catch (error) {
					console.error("Error authorizing user:", error.message)
					return false
				}
			}
		})
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token
			}
			return token
		},
		async session({ session, token }) {
			session.accessToken = token.accessToken
			return session
		},
		async signIn({ user, account }) {
			if (account.provider === "google") {
				await connect()
				const existingUser = await User.findOne({ email: user?.email })
				if (existingUser) {
					existingUser.image = user.image
					await existingUser.save()
				} else {
					await User.create({
						firstName: user.name?.split(" ")[0] || "",
						lastName: user.name?.split(" ")[1] || "",
						email: user?.email,
						image: user?.image
					})
				}
			}
			return true
		}
	},
	pages: {
		signIn: "/sign-in"
	}
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
