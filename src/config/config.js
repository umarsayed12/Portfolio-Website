const config = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteProjectCollectionId: String(
    import.meta.env.VITE_APPWRITE_PROJECT_COLLECTION_ID
  ),
  appwriteProjectImagesBucketId: String(
    import.meta.env.VITE_APPWRITE_PROJECT_IMAGES_BUCKET_ID
  ),
};
export default config;
