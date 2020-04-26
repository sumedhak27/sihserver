let collectionNames = {};
class Collections {
	static initCollections(db) {
        collectionNames.UserDetails = db.collection('UserDetails');
        collectionNames.Results = db.collection('Results')
        collectionNames.FormDetails = db.collection('FormDetails')
	}
}
module.exports.collectionNames = collectionNames;
module.exports.Collections = Collections;
