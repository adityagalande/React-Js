import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class DatabasesService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrlEndpoint)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userID }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                })
        } catch (error) {
            throw error;
        }
    }


}

const databasesservice = new DatabasesService();

export default databasesservice;