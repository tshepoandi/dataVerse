import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export async function disconnectFromDatabase() {
    try {
        await client.close();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error disconnecting from MongoDB:', error);
        throw error;
    }
}

export async function getCollection(dbName, collectionName) {
    const db = client.db(dbName);
    return db.collection(collectionName);
}

export async function insertDocument(dbName, collectionName, document) {
    const collection = await getCollection(dbName, collectionName);
    const result = await collection.insertOne(document);
    return result;
}

export default {
    connectToDatabase,
    disconnectFromDatabase,
    getCollection,
    insertDocument,

};