// 1. Create a new collection
const createCollectionQuery = (collectionName) => {
  return db.createCollection(collectionName);
};

// 2. Remove a collection from the database
const removeCollectionQuery = (collectionName) => {
  return db.collection(collectionName).drop();
};

// 3. Insert a single document into a collection
const insertDocumentQuery = (collectionName, document) => {
  return db.collection(collectionName).insertOne(document);
};

// 4. Delete/remove a single document from the collection
const deleteDocumentQuery = (collectionName, query) => {
  return db.collection(collectionName).deleteOne(query);
};
