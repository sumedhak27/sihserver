exports.fetchForm = function (collectionNames,req,res) { 
    collectionNames.ApplicantDetails.find({ _id : req.body._id})
    .toArray()
    .then(result => {
        if(result.length) 
            console.log("No record found.");
        res.send(result[0]);
    })
    .catch(err => {
        console.log("Error in fetching record", err);
        res.send(err);
    });
};