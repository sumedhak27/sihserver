let collectionNames = {};
class Collections {
	static initCollections(db) {
        collectionNames.ApplicantDetails = db.collection('ApplicantDetails');
        collectionNames.Results = db.collection('Results');
        collectionNames.LoginCred = db.collection('LoginCred');
	}
}
module.exports.collectionNames = collectionNames;
module.exports.Collections = Collections;
