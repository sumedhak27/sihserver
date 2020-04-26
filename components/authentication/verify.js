exports.verify = function (collectionNames,req,res) {
    
    let aid = req.body.applicationID;
    let key = req.body.key;

    let UserDetails = collectionNames.UserDetails;
    
    let query = {
        _id:aid,
        key:key
    }

    

    UserDetails.find(query).toArray(function (err,result) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            if (result.length === 0) {
                console.log("User not recognized");
                res.send("0");
            } else {
                console.log("User Recognized");
                res.send("1");
            }
        }
    });

};
