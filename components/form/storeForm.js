exports.storeForm = function (collectionNames,req,res) {
    let details = req.body;
    let ApplicantDetails = collectionNames.ApplicantDetails;
    console.log('In Store Details');

    ApplicantDetails.find({_id : details._id})
    .toArray()
    .then(result => {
        if(result.length == 0) {
            ApplicantDetails.insertOne(details)
            .then(result => {
                console.log('Details Stored Successfully : ' + result);
                res.send({
                    status : 1,
                    msg : "Applicant registered successfull.✌"
                });
            })
            .catch(err => {
                res.send({
                    status : -1,
                    msg : err
                })
            });
        }
        else {
            console.log('Record already exists.')
            res.send({
                status :0,
                msg : "Record already exists."
            });
        }
    })
    .catch(err => {
        console.log(err)
        res.send({status : -1, msg : err});
    }); 
    
    /*ApplicantDetails.insertOne(details,function (err,result) {
        if (err) {
            console.log('Error in inserting into db');
            throw err;
        }
        console.log('Details Stored Successfully : ' + result);
        res.send({status : 1});
    });
    */

};
