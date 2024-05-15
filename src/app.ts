import { Surreal } from "surrealdb.js";
import config from "./config/config";

const app = async () => {

    
    const db = new Surreal()
    await db.connect(`${config.db.host}`, {
        namespace: config.db.space.namespace,
        database: config.db.space.database
    })

    const users = await db.create('users', {
        title: 'users',
        name: {
            first: 'red',
            last: '64bit'
        },
        age: 20,
        identity: Math.random().toString(36).substring(7)
    })

    console.log(users)

    console.log(`[+] Connecting to database at ${config.db.host}`)

    console.log('')
	console.log('')
	console.log(`[+] Welcome to the SurrealDB CLI!`)
    console.log('')
    console.log('[+] Type "help" for a list of commands')
    console.log('')
    console.log('')

    
    
}

app();