var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var movie = require('../models/movie');

var movieRouter = express.Router();
movieRouter.use(bodyParser.json());

movieRouter.route('/')
.get(function (req, res, next) {
    movie.find({}, function (err, stat) {
        if (err) throw err;
        res.json(stat);
    });
})

.post(function (req, res, next) {
    movie.create(req.body, function (err, stat) {
        //if (err) throw err;
        if (err) { return next(err); }
        console.log('note created man!');
        var id = stat._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the note with id: ' + id);
    });
})

.delete(function (req, res, next) {
    movie.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

movieRouter.route('/:noteID')
.get(function (req, res, next) {
    movie.findById(req.params.noteID, function (err, stat) {
        if (err) throw err;
        res.json(stat);
    });
})

.put(function (req, res, next) {
    movie.findByIdAndUpdate(req.params.noteID, {
        $set: req.body
    }, {
        new: true
    }, function (err, stat) {
        if (err) throw err;
        res.json(stat);
    });
})

.delete(function (req, res, next) {
    movie.findByIdAndRemove(req.params.noteID, function (err, resp) {
       if (err) throw err;
        res.json(resp);
    });
});


movieRouter.route('/tags/:tagID')
.get(function (req, res, next) {
//    stats.find({ "name": req.params.value}, function (err, stat) {
    movie.find({ "tags": req.params.tagID}, function (err, stat) {
        if (err) throw err;
        res.json(stat);
    });
})



module.exports = movieRouter;
