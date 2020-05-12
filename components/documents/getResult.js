exports.getResult = (CollectionNames, req, res) => {
    CollectionNames.Results.findOne({_id : req.body._id})
    .then(result => {
        if(result.length == 0) {
            console.log("No records found.");
            res.send({status : 0, msg : "No record found."});
        }
        res.send(result);
    })
    .catch(err => {
        console.log(err);
        res.send({status : -1, msg : err})
    });
}