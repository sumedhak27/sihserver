let PDFdocument = require('./pdfkit-tables')

exports.genAdmitCard = function (collectionNames,fs,aid,res) {

    let line1 = "Application ID  : " + aid;
    let line2 = "Name : John Doe";

    const doc = new PDFdocument();

    let filePath = './components/form/generated/' + aid  + '.pdf';

    doc.pipe(fs.createWriteStream(filePath));
    
    doc.fontSize(16);

    doc.text(`Admit Card For . ${aid}`, {
        width: 410,
        align: 'center'
    }
    );

    // const table0 = {
    //     headers: ['Word', 'Comment', 'Summary'],
    //     rows: [
    //         ['Apple', 'Not this one', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.'],
    //         ['Tire', 'Smells like funny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.']
    //     ]
    // };
    
    // doc.table(table0, {
    //     prepareHeader: () => doc.font('Helvetica-Bold'),
    //     prepareRow: (row, i) => doc.font('Helvetica').fontSize(10)
    // });
    
    // const table1 = {
    //     headers: ['Country', 'Conversion rate', 'Trend'],
    //     rows: [
    //         ['Switzerland', '12%', '+1.12%'],
    //         ['France', '67%', '-0.98%'],
    //         ['England', '33%', '+4.44%']
    //     ]
    // };
    
    // doc.moveDown().table(table1, 100, 350, { width: 300 });

    doc.end();

    // send to client

    // update query -- status of admit card generated

    // res.pdf(path.resolve(__dirname, './original.pdf'))
    res.send("1")
};
