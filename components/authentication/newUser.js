exports.newUser = function (collectionNames,req,res) {
    let details = req.body;
    let UserDetails = collectionNames.UserDetails;
	
	console.log('Storing new user');
	
    UserDetails.insertOne(details,function (err,result) {
        if (err) {
            console.log('Error in inserting into db');
            throw err;
        }
        console.log('New user Stored Successfully : ' + result);
        res.send('New User Stored');
    });
};
