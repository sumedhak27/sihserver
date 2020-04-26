exports.genAdmitCard = function (path,req,res) {

    let applicationID = req.body.applicationID;

    // send to client

    let filePath = "./components/form/generated/" + applicationID + ".pdf";
    
    // res.pdf(path.resolve(__dirname, './original.pdf'))
    res.pdf(path.resolve(filePath))

};
