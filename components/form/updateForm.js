exports.updateForm = (CollectionNames, req, res)=> {
    CollectionNames.ApplicantDetails.updateOne({_id : req.body._id}, {'$set' : req.body})
    .then(result => {
        console.log(result);
        res.send({
            status : 1,
            msg : "Form updated successfully ✔"
        })
    })
    .catch(err => {
        console.log(err);
        res.send({
            status : -1,
            msg : err
        })
    });
}