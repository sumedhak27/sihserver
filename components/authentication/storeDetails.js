exports.storeDetails = function (collectionNames,req,res) {
    let details = req.body;
    let UserDetails = collectionNames.UserDetails;
    console.log('In Store Details');
    UserDetails.insertOne(details,function (err,result) {
        if (err) {
            console.log('Error in inserting into db');
            throw err;
        }
        console.log('Details Stored Successfully : ' + result);
        res.send('Details Stored');
    });
};
