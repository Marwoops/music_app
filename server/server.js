import express from 'express';
import fs from 'fs';

let app = express();

let musicList = [];
let musicPath = __dirname + '/music/';

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

app.get('/list', (req, res) => {

    musicList = [];
    fs.readdir(musicPath, (err, items) => {

        for (let i = 0; i < items.length; i++) {

            if (items[i].slice(- 4) === '.mp3') {

                musicList.push(items[i].slice(0, -4));
            };
        };
    res.send(musicList)
    res.end();
    });
});

app.listen(3003, () => console.log('App listenning on port 3003!'));