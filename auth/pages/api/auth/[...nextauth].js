import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import jwt from "next-auth/jwt"

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    database: process.env.DB_URL,
    session: {
        jwt: true
    },
    jwt:{
        secret: 'A_RANDOM_STRING'
    }
})