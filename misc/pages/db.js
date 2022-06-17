function DB() {
    return <h1>DB Page {process.env.NEXT_PUBLIC_ID}</h1>
}

export default DB

export async function getStaticProps() {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    console.log(`username is ${user} and password is ${password}`)
    return{
        props:{

        }
    }
}