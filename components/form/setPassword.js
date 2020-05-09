exports.setPassword = (CollectionNames, req, res) => {
    CollectionNames.LoginCred.insertOne(req.body)
    .then(result => {
        console.log(result);
        res.send({
            status : 1,
            msg : "Password set Successfully 🎉. Applicant registration completed. ✔"
        });
    })
    .catch(err => {
        console.log(err);
        res.senc({
            status : 0,
            msg : err
        })
    })
}