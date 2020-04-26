exports.getNewID = function (collectionNames,req,res) {
    
    
    let applnID = getID();

    let query = {
        _id:applnID
    };

    // check if application id already exists

    collectionNames.FormDetails.find(query,{_id:0}).toArray(function (err,result) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            if (result.length === 0) {
                let id = {
                    applicationID : applnID
                };

                res.send(id)
            } else {
                console.log("Error in fetching unique id");
                //TODO: need to change implementation(add loop)
            }
        }
    });
};

let getID = function () {

    let date = new Date();
    let components = [
        date.getYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];

    let id = components.join("").substr(0,14);

    return id;
}