const { createClient } = require("@astrajs/collections")

const collection = 'tktkposts'

exports.handler = async function (event,context,callback) {

    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD,
    
    })

    const posts = astraClient
       .namespace(process.env.ASTRA_DB_KEYSPACE)
       .collection(collection)

    try {
        const res = await posts.create()
        body: JSON.stringify(res)

        return {
            statusCode: 200
        }
    } catch (err) {
        console.error(err)

        return {
            statusCode:500
        }
    }


}
