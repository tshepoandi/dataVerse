import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const mongo_uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_URI}@cluster0.gczcjjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const connectToDatabase = async() => {
    try {
        const connect = await mongoose.connect(mongo_uri)
        console.log("MongoDB Connected At:" + connect.connection.host)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


export default connectToDatabase