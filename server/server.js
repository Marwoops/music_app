import express from 'express';
import fs from 'fs';

let app = express();

app.get('/music', (req, res) => {

    let fileId = req.query.id;
    let file = __dirname + '/music/' + fileId;

    fs.exists(file, (exists) => {
        if (exists) {

            let rstream = fs.createReadStream(file);
            rstream.pipe(res);

        } else {
            console.log('file doesn\'t exists');
            res.end()
        }
    });
});

app.listen(3003, () => console.log('App listenning on port 3003!'));