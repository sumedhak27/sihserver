exports.storeForm = function (collectionNames,req,res) {
    let details = req.body;
    let FormDetails = collectionNames.FormDetails;
    console.log('In Store Details');
    FormDetails.insertOne(details,function (err,result) {
        if (err) {
            console.log('Error in inserting into db');
            throw err;
        }
        console.log('Details Stored Successfully : ' + result);
        res.send('Details Stored');
    });
};
