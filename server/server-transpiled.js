'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/music', function (req, res) {

    var fileId = req.query.id;
    var file = __dirname + '/music/' + fileId;

    _fs2.default.exists(file, function (exists) {
        if (exists) {

            var rstream = _fs2.default.createReadStream(file);
            rstream.pipe(res);
        } else {
            console.log('file doesn\'t exists');
            res.end();
        }
    });
});

app.listen(3003, function () {
    return console.log('App listenning on port 3003!');
});