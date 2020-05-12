exports.generateResult = (CollectionNames, req, res) => {
    CollectionNames.LoginCred.find({}, {key : 0})
    .toArray()
    .then(result => {
        function randomNumber(min, max) {  
            return Math.floor(Math.random() * (max - min) + min); 
        }  
        // console.log(result);
        let tot_result = []
        result.forEach(ele => {
            let your_result = {
                _id : ele._id,
                paper1 : {
                    childDevandPedagogy : randomNumber(15,30),
                    maths : randomNumber(15,30),
                    envStudies : randomNumber(15,30),
                    lang1 : randomNumber(15,30),
                    lang2 : randomNumber(15,30)
                },
                paper2 : {
                    childDevandPedagogy : randomNumber(15,30),
                    socialStudies : randomNumber(35,60),
                    lang1 : randomNumber(15,30),
                    lang2 : randomNumber(15,30)
                }
            }
            pap1 = your_result.paper1;
            pap1.total = (pap1.childDevandPedagogy + pap1.envStudies + pap1.maths + pap1.lang1 + pap1.lang2);
            pap1.percentage = (pap1.total*100)/150;
            pap2 = your_result.paper2;
            pap2.total = (pap2.childDevandPedagogy + pap2.socialStudies + pap2.lang1 + pap2.lang2);
            pap2.percentage = (pap2.total*100)/150;
            tot_result.push(your_result);
        });
        CollectionNames.Results.insert(tot_result)
        .then(res1 => {
            console.log(res);
            res.send({
                status : 1,
                msg : "Result generated successfully.📑",
                result : res1
            })
        })
        .catch(err => {
            console.log(err)
            res.send({
                status : 0,
                msg : "Result generation failed.❌",
                result : err
            })
        });
    })
    .catch(err => {
        console.error(err);
        res.send({
            status : -1,
            msg : "Error in fetching candidate id's. ❌",
            result : err
        })
    });
}