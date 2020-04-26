exports.fetchForm = function (collectionNames,req,res) {
    
    
    let applnID = req.body.applicationID;

    let query = {
        _id:applnID
    };

    // check if application id already exists

    // TODO: update this query
    collectionNames.FormDetails.find(query).toArray(function (err,result) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            if (result.length === 0) {
                console.log("error in fetching");
            } else {
                res.send(result[0]);
            }
        }
    });
};