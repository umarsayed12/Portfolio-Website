import { Client, Databases, Storage } from "appwrite";
import config from "../config/config";
export class Services {
  client = new Client();
  databases;
  Projectbucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.Projectbucket = new Storage(this.client);
    this.SkillsBucket = new Storage(this.client);
  }

  async getAllProjects() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteProjectCollectionId
      );
    } catch (error) {
      console.log("Error in Fetching Project : ", error);
    }
  }

  async getProjectImage(featuredImage) {
    try {
      return await this.Projectbucket.getFileView(
        config.appwriteProjectImagesBucketId,
        featuredImage
      );
    } catch (error) {
      console.log("Error in Getting Project Image : ", error);
    }
  }
}

const services = new Services();
export default services;
